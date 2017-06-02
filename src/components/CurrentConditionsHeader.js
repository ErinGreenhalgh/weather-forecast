import React from 'react';

const CurrentConditionsHeader = ({ temperature, description, sunriseTime, sunsetTime }) => {
  return(
    <ul>
      <li>Current Conditions:</li>
      <li>Temperature:{ temperature } </li>
      <li>{ description } </li>
      <li>Sunrise: { sunriseTime }</li>
      <li>Sunset: { sunsetTime }</li>
    </ul>
  )
}

export default CurrentConditionsHeader;
