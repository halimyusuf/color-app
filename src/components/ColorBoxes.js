import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBoxes.css';

class ColorBoxes extends Component {
  state = {
    copied: false,
  };

  changeCopied = () => {
    this.setState({ copied: true });
    setTimeout(() => this.setState({ copied: false }), 1500);
  };

  render() {
    const { color, name } = this.props.color;
    const { copied } = this.state;
    console.log(copied);

    return (
      <div key={name} style={{ backgroundColor: color }} className="color-box">
        <div className="copy-container">
          <div
            style={{ background: color }}
            className={`overlay ${copied && `show`}`}
          />
          <div className={`copied-text ${copied && `show`}`}>
            <h1>Copied!!</h1>
            <p>{color}</p>
          </div>
          <div className="box-content">
            <span>{name}</span>
          </div>
          <CopyToClipboard text={name}>
            <button onClick={this.changeCopied} className="copy">
              COPY
            </button>
          </CopyToClipboard>
        </div>
        <div className="more-section">
          <button className="more">MORE</button>
        </div>
      </div>
    );
  }
}

export default ColorBoxes;
