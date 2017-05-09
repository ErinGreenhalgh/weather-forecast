import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { position, options }  from '../data/geolocation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: ""
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const error = err => {
      this.setState({ position: err.message })
    }

    const success = position => {
      this.setState({ position })
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
