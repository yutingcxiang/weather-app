import React from 'react';

const Weather= (props) => {
  var date = new Date();
  var today = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

  return(
    <div>
      <p>{today}</p>
    </div>
  )
}

export default Weather;
