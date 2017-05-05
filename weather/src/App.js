import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      datas: [],
    }
  }
  changeCity(e) {
    const ct = e.target.value
    const appThis = this
    fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${ct}&mode=json&units=metric&cnt=5&APPID=481e3bc28e5264e5607c2b65b449bfc1`)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      appThis.setState({
        datas: data.list
      })
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <select onChange={(e) => { this.changeCity(e) }}>
          <option defaultValue=''>Select City...</option>
          <option value='Jakarta'>Jakarta</option>
          <option value='Tokyo'>Tokyo</option>
          <option value='London'>London</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Variance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>date</td>
              <td>0C</td>
              <td>0C</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
