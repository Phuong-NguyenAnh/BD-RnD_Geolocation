import React from 'react';
import logo from './logo.svg';
import DemoGeolocated from './DemoGeolocated';
require('./App.css');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DemoGeolocated />
      </header>
    </div>
  );
}

export default App;
