import React from 'react';

const CurrentConditionsHeader = ({ temperature, description, sunriseTime, sunsetTime }) => {
  return(
    <ul>
      <li>Current Conditions:</li>
      <li>{ temperature, description }</li>
      <li>Sunrise: { sunriseTime }</li>
      <li>Sunset: { sunsetTime }</li>
    </ul>
  )
}

export default CurrentConditionsHeader;
