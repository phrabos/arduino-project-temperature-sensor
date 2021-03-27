import React, { Component } from 'react';
import { getAllReadings } from '../../utils/API-utils';
import '../app.css';

export default class App extends Component {

  state = {
    tempF: 0,
    tempC: 0,
    humidity: 0,
    timer: null,
  }

  componentDidMount = async () => {
    
    const { tempF, tempC, humidity } = await getAllReadings();
    
    this.setState({
      tempF,
      tempC,
      humidity,
      timer: setInterval(async () => {
        const { tempF, tempC, humidity } = await getAllReadings()
        this.setState({tempF, tempC, humidity})
      }, 5000)
    })
  }

  componentWillUnmount = () => {
    clearInterval(this.state.timer)
  }
  
  render()
  {
    return (

      <div>
        <h2>ESP 32 Sensor Project</h2>
        <p>
          <span>Temp </span>
          <span> {this.state.tempF}&deg;F</span>
        </p>
        <p>
          <span>Temp </span>
          <span> {this.state.tempC}&deg;C</span>
        </p>
        <p>
          <span>Humidity </span>
          <span> {this.state.humidity}%</span>
        </p>
      </div>

    )
  }
}
