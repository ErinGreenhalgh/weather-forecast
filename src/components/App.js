import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { position }  from '../data/geolocation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: ""
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    function error(err) {
      this.setState({ position: err.message })
    }

    function success(position) {
      this.setState({ position })
    }

    let options = {
      timeout: 5000
    }

    return position(success.bind(this), error.bind(this), options);
  }

  render(){
    return (
      <div> Hello, { this.state.position.timestamp }</div>
    )
  }
}

export default App;
