import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
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
  const luminance = chroma(color).luminance();
  const lightness = luminance > 0.7;
  const colorClass = lightness ? 'black-text' : '';
  return (
    <div style={{ backgroundColor: color }} className="color-box">
      <div className="copy-container">
        <div
          style={{ background: color }}
          className={`overlay ${copied && `show`}`}
        />
        <div className={`copied-text ${copied && `show`} ${colorClass}`}>
          <h1>Copied!!</h1>
          <p>{color}</p>
        </div>
        <div className={`box-content ${colorClass}`}>
          <span>{name}</span>
        </div>
        <CopyToClipboard text={name}>
          <button onClick={changeCopied} className={`copy ${colorClass}`}>
            COPY
          </button>
        </CopyToClipboard>
      </div>
      {paletteId && (
        <div className="more-section">
          <Link to={`/palette/${paletteId}/${id}`}>
            <button className={`more ${colorClass}`}>MORE</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ColorBoxes;
