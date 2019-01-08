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
    const response = await fetch('/api/weather');
    const body = await response.json();
    if (response.status !== 200){
      throw Error(body.message)
    };
    console.log(body);
    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/location', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
  };



  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter location..."
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>

        <Weather />

        <p>{this.state.city}</p>
        <p>{this.state.description}</p>

      </div>
    )
  }
}


export default WeatherContainer;
