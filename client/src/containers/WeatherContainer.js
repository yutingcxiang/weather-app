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
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        city: res["name"],
        weather: res["weather"][0]["main"],
        description: res["weather"][0]["description"],
        humidity: res["main"]["humidity"],
        low: res["main"]["temp_min"],
        high: res["main"]["temp_max"],
        wind: res["wind"]["speed"]}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/weather');
    const body = await response.json();
    if (response.status !== 200){
      throw Error(body.message)
    };
    return body;
  };

  handleChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault();
    const response = await fetch('/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: this.state.input }),
    });
    const body = await response.json();
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
