import React, { Component } from 'react';
import Weather from '../components/Weather.js';

class WeatherContainer extends Component {
  state = {
    city: '',
    weather: '',
    description: '',
    humidity: '',
    low: '',
    high: '',
    wind: '',
    input: "",
    error: false
  }

  getWeather = () => {
    return fetch('/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: this.state.input }),
    })
    .then(response => response.json())
    .then(res => {
      if (Object.keys(res).length !== 0) {
        this.setState({
         city: res["name"],
         weather: res["weather"][0]["main"],
         description: res["weather"][0]["description"],
         humidity: res["main"]["humidity"],
         low: res["main"]["temp_min"],
         high: res["main"]["temp_max"],
         wind: res["wind"]["speed"],
         input: '',
         error: false
       })
       } else {
         this.setState({
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
    this.getWeather()
      // .then(response => response.json())
      // .then(res => console.log(res))
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter city..."
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>

        <Weather city={this.state.city} weather={this.state.weather} description={this.state.description}
            humidity={this.state.humidity} low={this.state.low} high={this.state.high} wind={this.state.wind} />
      </div>
    )
  }
}


export default WeatherContainer;
