 import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let xCoord = event.clientX
    let yCoord = event.clientY
    drawChromeBoiAtCoords(xCoord, yCoord)
    }
  
  handleClick = () => {
    toggleCycling()
  }

  handleKeyPress = (event) => {
    let pressed = event.key 
    let arg 
    if (pressed === 'a') {
      arg = '+'
    } else if (pressed === 's') {
      arg = '-'
    }
    resize(arg)
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
