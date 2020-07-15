import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

// 7/15 JP Note: Mvnt is up and down ONLY -- and NOT 'across' between two sibling components

class Child extends Component {
  render() {
    return (
      <div onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child