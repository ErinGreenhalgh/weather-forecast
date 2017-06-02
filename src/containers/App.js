import React from 'react';
import { connect } from 'react-redux';
import CurrentConditionsHeader from '../components/CurrentConditionsHeader';
import { bindActionCreators } from 'redux';
import * as sunriseActions from '../actions/sunriseActions';
import * as weatherActions from '../actions/weatherActions';


class App extends React.Component {

  componentDidMount() {
    this.props.sunriseActions.fetchSunriseData();
    // this.props.weatherActions.fetchConditions();
  }

  render() {
    return(
      <CurrentConditionsHeader temperature={this.props.currentConditions.temperature}
                               description={this.props.currentConditions.description}
                               sunriseTime={this.props.sunriseData.sunrise}
                               sunsetTime={this.props.sunriseData.sunset}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    sunriseData: state.sunriseData,
    currentConditions: state.weatherConditions
  };
}

const mapDispatchToProps = dispatch => {
  return {
    sunriseActions: bindActionCreators(sunriseActions, dispatch),
    // weatherActions: bindActionCreators(weatherActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
