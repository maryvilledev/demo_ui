import React, { Component } from 'react';
import CodeContainer from './containers/CodeContainer';

class App extends Component {
  render() {
    return (
      <CodeContainer onMouseEnter={description => console.log(description)}/>
    );
  }
}

export default App;
