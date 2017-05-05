import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
        <select>
          <option>Select City...</option>
          <option>Jakarta</option>
          <option>Tokyo</option>
          <option>London</option>
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
