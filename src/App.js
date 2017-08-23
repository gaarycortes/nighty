import React, { Component } from 'react';
import './App.css';
import Cards from'./Cards.js';
import { Card } from 'antd';
import Navegation from './Navegation';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div>
        <div className="">
          <Navegation/>
        </div>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Container/>
          
        </div>
      </div>
    );
  }
}



export default App;
