import React, { Component } from 'react';
import redux from 'redux'

import '../App.css';
import Intro from '../components/IntroComponent'

class AppComponent extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
      </div>
    );
  }
}

export default AppComponent;
