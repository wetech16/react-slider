import React from 'react';
import './App.css';
import Slider from './components/Slider';
import SliderClassVersion from './components/SliderClassVersion'
import styled from 'styled-components'

const Styles = styled.div`
  .App {
    display: flex;
    justify-content: center;
  }

  .wrapper {
    margin-top: 20vh;
    width: 50%;
  }
`;


function App() {
  return (
    <Styles>
      <div className="App">
        <div className="wrapper">
          <h1>Hook Color Picker</h1>
          <Slider color="#0074D9"/>
          <h1>ClassState Color Picker</h1>
          <SliderClassVersion color="#3D9970"/>
        </div>
      </div>
    </Styles>
  );
}

export default App;
