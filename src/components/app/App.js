import React, { Component } from 'react';
import { getTempF, getTempC, getHumidity } from '../../utils/API-utils';

export default class App extends Component {

  state = {
    tempF: 212,
    tempC: 100,
  }

  componentDidMount = async () => {
    
    const farenheit = await getTempF();
    const celsius = await getTempC();
    const humidity = await getHumidity();
    this.setState({
      tempF: farenheit,
      tempC: celsius,
      humidity: humidity,

    })
  }
  
  render()
  {
    return (
      <>
        <h1>ESP 32 Sensor</h1>
        <p>Temp in F{this.state.tempF}</p>
        <p>Temp in C{this.state.tempC}</p>
        <p>Humidity{this.state.humidity}</p>
      </>
    )
  }
}
