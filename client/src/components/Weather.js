import React from 'react';

const Weather = (props) => {
  let capitalizedDesc = props.description.charAt(0).toUpperCase() + props.description.slice(1);

  return(
    <div>
      <h2>{props.city}</h2>
      <h4>{capitalizedDesc}</h4>
      <p>High: {props.high} °F</p>
      <p>Low: {props.low} °F</p>
      <p>Humidity: {props.humidity} %</p>
      <p>Wind Speed: {props.wind} mps</p>
    </div>
  )
}

export default Weather;
