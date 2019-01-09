import React from 'react';

const LocationForm = (props) => {

  return(
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Enter City..."
        value={props.input}
        onChange={props.handleChange}
      />
      <button type="submit"></button>
    </form>
  )
}

export default LocationForm;
