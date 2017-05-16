import React from 'react';

const SunriseBar = ({ sunriseTime, sunsetTime }) => {
  return(
    <ul>
      <li>Sunrise: { sunriseTime }</li>
      <li>Sunset: { sunsetTime }</li>
    </ul>
  )
}

export default SunriseBar;
