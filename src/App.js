import React, { Component } from 'react';
import './reset.css';
import './App.css';
import routes from './routes'

// import Dashboard from './components/Dashboard/Dashboard'
// import Wizard from './components/Wizard/Wizard'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
