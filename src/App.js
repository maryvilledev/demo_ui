import React, { Component } from 'react';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar activeTab={1} onSwitchTab={() => {}} />
      </div>
    );
  }
}

export default App;
