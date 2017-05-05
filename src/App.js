import React, { Component } from 'react';
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
      appThis.setState({
        datas: data.list
      })
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Climate App</h2>
        </div>
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
            {this.state.datas.map((data, index) => {
              let date = new Date(0)
              date.setUTCSeconds(data.dt)
              let fin = JSON.stringify(date).slice(1, 11)
              return (
                <tr key={index}>
                  <td>{fin}</td>
                  <td>{data.temp.day.toFixed(0)}C</td>
                  <td>{(data.temp.max-data.temp.min).toFixed(2)}C</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
