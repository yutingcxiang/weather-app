import React from 'react';

const Weather= (props) => {
  var date = new Date();
  var today = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

  return(
    <div>
      <h2>{today}</h2>
      <p>{props.city}</p>
      <p>{props.description}</p>
      <p>{props.weather}</p>
      <p>{props.humidity}</p>
      <p>{props.low}</p>
      <p>{props.high}</p>
      <p>{props.wind}</p>
    </div>
  )
}

export default Weather;
