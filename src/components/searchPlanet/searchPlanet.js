import React, { Component } from 'react';
import axios from 'axios';

export default class SearchPlanet extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            search: '',
            searchResults: []
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/planets/')
        .then((response) => {
            console.log(response.data.results);
            console.log('this.state: ', this.state)
            const results = response.data.results;
            this.setState({results})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleChange(e) {
        this.setState({search : e.target.value});
    }

    render() {
        let results = this.state.results.filter((planet) => {
            let planetName = planet.name.toLowerCase();
            return planetName.indexOf(this.state.search.toLowerCase()) !== -1 && planet.population !== 'unknown';
        });
        if(this.state.search === '') {
            results = []; 
        }

        let finalResults = results.sort(function (a, b) {
            return b.population - a.population;
          });
        return (
            <div>
                <div className="panel-heading">
                    <div>Search Page</div>      
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-xs-offset-3">               
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-xs-offset-2 col-xs-8">
                                        <form id="login-form">
                                            <div className="form-group">
                                                <label> Search for Planets </label>
                                                <input type="text" name="planet" id="planet" value={this.state.search} onChange={(e) => this.handleChange(e)} className="form-control" placeholder="Search Planet"  />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="data row">
                       
                        {results.map((planet, ind) => {
                            const fontSize = 20 - ind*2; 
                            return <div className='col-xs-6 col-xs-offset-4' key={planet.name} style={{fontSize:fontSize}}> {planet.name} </div>
                        })} 
                        
                    </div>
                </div>
            </div>
        );
    }
}