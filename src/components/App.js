import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { geo }  from '../data/geolocation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "nothing"
    }
  }

  componentDidMount() {
    let that = this;
    function error(err) {
      that.setState({ position: err.message })
    }

    function success(position) {
      that.setState({ position })
    }

    let options = {
      timeout: 5000
    }

    return geo.getCurrentPosition(success, error, options);
  }

  render(){
    return (
      <div> Hello, { this.state.position.timestamp }</div>
    )
  }
}

export default App;
