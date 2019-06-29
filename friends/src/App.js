import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Link, Route} from 'react-router-dom';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <h1>App isn't Broken</h1>
      <Link to = "/form">Form</Link>

      <Route path = "/form" component = {Form} />
    </div>
  )
}

function mapStateToProps(state){
  return {}
}

export default connect(mapStateToProps)(App)
