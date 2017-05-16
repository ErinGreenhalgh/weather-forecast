import React from 'react';
import { connect } from 'react-redux';
import SunriseBar from '../components/SunriseBar';
import { bindActionCreators } from 'redux';
import * as sunriseActions from '../actions/sunriseActions'

class App extends React.Component {
  //won't have local state;
  //state comes from redux
  componentDidMount() {
    this.props.actions.fetchSunriseData();
  }
  render() {
    console.log("props:", this.props)
    return(
      <SunriseBar sunriseTime={this.props.data.sunrise}
                  sunsetTime={this.props.data.sunset}/>
    )
  }


}


const mapStateToProps = state => {
  return {
    data: state.sunriseData
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(sunriseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
