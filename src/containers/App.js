import React from 'react';
import { connect } from 'react-redux';
import SunriseBar from '../components/SunriseBar';

class App extends React.Component {
  //won't have local state;
  //state comes from redux

  render() {
    return(
      <SunriseBar />
    )
  }


}

const mapStateToProps = state => {
  // return an object of redux store data
  // that you'd like available in your component
  return {};
}

const mapDispatchToProps = dispatch => {
  // return an object of methods you'd like
  // to dispatch as redux actions
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
