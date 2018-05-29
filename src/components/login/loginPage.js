import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      results: []
    }
  }
    handleSubmit(e) {
        e.preventDefault();
        const { username, password, results } = this.state;
        const loginObj = results.find((people)=>{
            return people.name === this.state.username && people.birth_year === this.state.password;
        });
        if(loginObj) {
            window.sessionStorage.setItem('loginObj',JSON.stringify(loginObj))
            hashHistory.push('/search');
        } else {
          alert('Please Enter correct charater name and his Birth Year')
        } 
      
    }
    handleChange(e) {
        this.setState({[e.target.name] : e.target.value});
    }
    componentDidMount() {
        axios.get('https://swapi.co/api/people/')
        .then((response) => {
            const results = response.data.results;
            this.setState({results})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div className="panel-heading">
                    <div>Login Page</div>      
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-xs-offset-3">               
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-xs-offset-2 col-xs-8">
                                        <form id="login-form" onSubmit={(e) => this.handleSubmit(e)}>
                                            <div className="form-group">
                                                <label> User Name </label>
                                                <input type="text" name="username" id="username" tabIndex="1" onChange={(e) => this.handleChange(e)} value={this.state.username} className="form-control" placeholder="Username" required/>
                                            </div>
                                            <div className="form-group">
                                                <label> Password </label>
                                                <input type="password" name="password" onChange={(e) => this.handleChange(e)} value={this.state.password} id="password" tabIndex="2" className="form-control" placeholder="Password" required/>
                                            </div>
                                            <div className="form-group">   
                                                <button type="submit" name="login-submit" id="login-submit" tabIndex="3" className="form-control btn btn-primary btn-block"> Login </button>      
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}