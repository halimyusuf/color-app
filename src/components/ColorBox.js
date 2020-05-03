import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';
import { Link } from 'react-router-dom';

const ColorBoxes = ({ color: colorObj, colorFormat, paletteId }) => {
  const [copied, setCopied] = useState(false);
  const changeCopied = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const { id, name } = colorObj;
  const color = colorObj[colorFormat];
  return (
    <div style={{ backgroundColor: color }} className="color-box">
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
          <button onClick={changeCopied} className="copy">
            COPY
          </button>
        </CopyToClipboard>
      </div>
      {paletteId && (
        <div className="more-section">
          <Link to={`/palette/${paletteId}/${id}`}>
            <button className="more">MORE</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ColorBoxes;
