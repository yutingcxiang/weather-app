import React from 'react';

const Weather = (props) => {
  let capitalizedDesc = props.description.charAt(0).toUpperCase() + props.description.slice(1);
  let temp = Math.round(props.temperature);

  return(
    <div>
      <h1>{props.city}</h1>
      <h2>{temp}°F</h2>
      <h3>{capitalizedDesc}</h3>
      <p>High: {props.high}°F</p>
      <p>Low: {props.low}°F</p>
      <p>Humidity: {props.humidity}%</p>
      <p>Wind Speed: {props.wind}mps</p>
    </div>
  )
}

export default Weather;
