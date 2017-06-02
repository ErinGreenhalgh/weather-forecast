import React from 'react';
import { connect } from 'react-redux';
import CurrentConditionsHeader from '../components/CurrentConditionsHeader';
import { bindActionCreators } from 'redux';
import * as sunriseActions from '../actions/sunriseActions';


class App extends React.Component {

  componentDidMount() {
    this.props.actions.fetchSunriseData();
  }

  render() {
    return(
      <CurrentConditionsHeader sunriseTime={this.props.data.sunrise}
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
