import React, { Component } from 'react';
import './App.css';
import WeatherContainer from './containers/WeatherContainer.js';
// import Moment from 'react-moment';

class App extends Component {

render() {
    return (
      <div className="App">
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
