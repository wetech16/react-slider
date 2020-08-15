import React, { useState } from 'react'
import copy from 'copy-to-clipboard';
import './App.css'
import Slider from './components/Slider'
import styled from 'styled-components'
import SliderApp from './components/SliderApp';

const Styles = styled.div`
  .App {
    display: flex;
    justify-content: center;
  }
  .wrapper {
    margin-top: 20vh;
    width: 50%;
  }
  h1 {
    margin-bottom: 0.5rem;
  }
  button {
    padding: 0;
    border: 0;
    &:focus {
      outline: none;
    }
    input {
      background-color: #${props => props.color};
      display: flex;
      text-align: center;
      color: white;
      border: 0;
      outline: 0;
      padding: 0.5rem 0 0.5rem 0;
      font-size: 1.2em;
      user-select: none;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  }
`;


function App() {
  const [color, setColor] = useState('000000');
  const [showCopyText, setShowCopyText] = useState(false);
 
  const handleUpdateColor = (color, value) => {
    const red = color.slice(0, 2).toUpperCase();
    const green = color.slice(2, 4).toUpperCase();
    const blue = color.slice(4, 6).toUpperCase();
    const hexColor = Number(value).toString(16).padStart(2, '0').toUpperCase();

    if (color === 'red') {
      setColor(`${hexColor}${green}${blue}`);
    } else if (color === 'green') {
      setColor(`${red}${hexColor}${blue}` );
    } else {
      setColor(`${red}${green}${hexColor}` );
    }
  }
  const toggleShowCopyText = () => {
    setShowCopyText(true);
    setTimeout(() => setShowCopyText(false), 1000);
  }
  const handleCopyToClipboard = () => {
    copy('#' + color);
    toggleShowCopyText();
  }
  return (
    <Styles color={color}>
      <div className="App">
        <div className="wrapper">
          <h1>Color Picker</h1>
          <button onClick={handleCopyToClipboard}>
            <input
              type="text"
              value={showCopyText ? 'Copied!' : `#${color}`}
              disabled="disabled"
            />
          </button>
          <Slider color="#FF4136" hexColor="red" handleUpdateColor={handleUpdateColor} />
          <Slider color="#3D9970" hexColor="green" handleUpdateColor={handleUpdateColor} />
          <Slider color="#0074D9" hexColor="blue" handleUpdateColor={handleUpdateColor} />
        </div>
      </div>
      <SliderApp />
  </Styles>
  );
}


export default App;
