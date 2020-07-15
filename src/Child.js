import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div
        onClick={ this.props.color }
        className="child"
        style={{backgroundColor: "#FFF"}}
      ></div>
    )
  }
}

export default Child
