import React, { Component } from 'react';
import Weather from '../components/Weather.js';
import Today from '../components/Today.js';
import Error from '../components/Error.js';
import LocationForm from '../components/LocationForm.js';

class WeatherContainer extends Component {
  state = {
    weather: {},
    city: '',
    input: "",
    error: false
  }

  componentDidMount() {
    this.interval = setInterval(() =>
      this.getWeather(this.state.city), 900000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getWeather = (input) => {
    return fetch('/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    })
    .then(response => response.json())
    .then(res => {
      if (Object.keys(res).length !== 0) {
        this.setState({
          weather: res,
          city: res["name"],
          input: '',
          error: false
       })} else {
         this.setState({
           city: '',
           input: '',
           error: true
         })
       }
     })
     .catch((error) => {
       throw error
     })
  };

  handleChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.getWeather(this.state.input);
    event.target.reset();
  };

  render() {
    return(
      <div className="centered">
        <Today />
        <br/>
        <LocationForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.input}/>
        {this.state.error && <Error />}
        <br/>
        {this.state.city && <Weather
          city={this.state.city}
          temperature={this.state.weather["main"]["temp"]}
          description={this.state.weather["weather"][0]["description"]}
          humidity={this.state.weather["main"]["humidity"]}
          low={this.state.weather["main"]["temp_min"]}
          high={this.state.weather["main"]["temp_max"]}
          wind={this.state.weather["wind"]["speed"]} />}
      </div>
    )
  }
}

export default WeatherContainer;
