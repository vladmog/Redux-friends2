import React from 'react';
import {Component} from 'react';
import App from '../App';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../actions/actions'

class Form extends Component {
    state = {
        username: "",
        password: ""
    }

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        let creds = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(this.props.login(creds))

    }
    render(){
        return (
            <div>
                <h1>Form isn't Broken</h1>
                <form>
                    <input
                        name = "username"
                        value = {this.state.username}
                        onChange = {this.changeHandler}
                    />
                    <input 
                        name = "password"
                        value = {this.state.password}
                        onChange = {this.changeHandler}
                    />
                    <button
                        onClick = {this.submitHandler}
                    >Submit!</button>
                </form>
                <Route exact path = "/" component = {App} />
                <Link to = "/">Home</Link>
            </div>
        )
    }
}

function mapStateToProps(){
    return {}
}

export default connect(mapStateToProps, {login})(Form);