import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

function App() {
  return (
    <div className="App">

    </div>
  );
}

function mapStateToProps(state){
  return {}
}

export default connect(mapStateToProps)(App)
