import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { planetFetchData } from '../../actions/planet_action';

class SearchPlanet extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }

    componentDidMount() {
      this.props.fetchData();
    }
    handleChange(e) {
        this.setState({search : e.target.value});
    }

    render() {
        let results = this.props.results.filter((planet) => {
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
                {this.props.loading ? <div className="loading">Loading&#8230;</div>: 
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
                       
                        {results.length > 0 ? results.map((planet, ind) => {
                            const fontSize = 20 - ind*2; 
                            return <div className='col-xs-6 col-xs-offset-4' key={planet.name} style={{fontSize:fontSize}}> {planet.name} </div>
                        }):
                        this.state.search !== '' ? <div className='col-xs-6 col-xs-offset-4'> No results Found </div> : <div />
                        } 
                        
                    </div>
                </div>}
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    results: state.planet,
    loading: state.planetIsLoading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(planetFetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlanet);