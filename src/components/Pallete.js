import React, { Component } from 'react';
import ColorBoxes from './ColorBoxes';
import './Pallete.css';

class Pallete extends Component {
  renderBoxes = () => {
    const { colors } = this.props;
    return colors.map((color) => <ColorBoxes color={color} />);
  };
  render() {
    return (
      <div className="pallete">
        <div className="pallete-colors">{this.renderBoxes()}</div>
      </div>
    );
  }
}

export default Pallete;
