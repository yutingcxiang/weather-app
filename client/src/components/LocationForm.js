import React from 'react';

const LocationForm = (props) => {
  let handleChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  let handleSubmit = event => {
    event.preventDefault();
    props.getWeather()
  };

  return(
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Enter city..."
        value={props.input}
        onChange={props.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default LocationForm;
