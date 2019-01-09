import React, { Component } from 'react';
import './App.css';
import WeatherContainer from './containers/WeatherContainer.js';

class App extends Component {
  render() {
    let date = new Date();
    let today = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

    return (
      <div className="App overlay">
        <h1>{today}</h1>
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
