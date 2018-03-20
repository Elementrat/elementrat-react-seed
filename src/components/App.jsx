import React, { Component } from 'react';
import redux from 'redux';

import '../App.css';
import Intro from '../components/IntroComponent';

const AppComponent = () => {
  return (
    <div className="App">
      <Intro />
    </div>
  );
};

export default AppComponent;
