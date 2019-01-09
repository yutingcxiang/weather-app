import React from 'react';

const Today = (props) => {
  let date = new Date();
  let today = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  let d = new Date(today)
  let weekday = days[d.getDay()]

  return(
    <div>
      <h1>{weekday} {today}</h1>
    </div>
  )
}

export default Today;
