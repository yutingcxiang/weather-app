import React, { Component } from 'react';
import Weather from '../components/Weather.js';
import LocationForm from '../components/LocationForm.js';

class WeatherContainer extends Component {
  state = {
    city: '',
    description: '',
    humidity: '',
    low: '',
    high: '',
    wind: '',
    input: "",
    error: false
  }

  getWeather = () => {
    return fetch('/', {
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
         description: res["weather"][0]["description"],
         humidity: res["main"]["humidity"],
         low: res["main"]["temp_min"],
         high: res["main"]["temp_max"],
         wind: res["wind"]["speed"],
         input: '',
         error: false
       })} else {
         this.setState({
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
    this.getWeather();
    event.target.reset();
  };

  render() {
    let date = new Date();
    let today = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

    return(
      <div className="centered">
        <h1>{today}</h1>
        <br/>
        <LocationForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.input}/>
        {this.state.error && <div><br/><p>Unable to locate you.</p>
          <p>Please try again.</p></div>}
        <br/>
        {this.state.city && <Weather city={this.state.city} description={this.state.description} humidity={this.state.humidity}
          low={this.state.low} high={this.state.high} wind={this.state.wind} />}
      </div>
    )
  }
}

export default WeatherContainer;
