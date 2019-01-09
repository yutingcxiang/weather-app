import React from 'react';

const Weather = (props) => {
  return(
    <div>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <p>{props.low}</p>
      <p>{props.high}</p>
      <p>{props.humidity}</p>
      <p>{props.wind}</p>
    </div>
  )
}

export default Weather;
