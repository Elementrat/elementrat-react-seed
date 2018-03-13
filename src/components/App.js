import React, { Component } from 'react';
import redux from 'redux'

import '../App.css';
import Marquee from '../containers/MarqueeContainer'
import Intro from '../components/IntroComponent'

class AppComponent extends Component {
  render() {
    return (
      <div className="App">
        <Marquee />
        <Intro />
      </div>
    );
  }
}

export default AppComponent;
