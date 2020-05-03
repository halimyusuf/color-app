import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from '../styles/ColorBoxStyles';
import chroma from 'chroma-js';
import './ColorBox.css';
import { Link } from 'react-router-dom';

const ColorBoxes = ({ color: colorObj, colorFormat, paletteId, classes }) => {
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
    <div style={{ backgroundColor: color }} className={classes.colorBox}>
      <div>
        <div
          style={{ background: color }}
          className={`${classes.overlay} ${copied && `${classes.showOverlay}`}`}
        />
        <div
          className={`${classes.copiedText} ${
            copied && `${classes.showCopiedText}`
          } ${colorClass}`}
        >
          <h1>Copied!!</h1>
          <p>{color}</p>
        </div>
        <div className={classes.boxContent}>
          <span className={classes.textColor}>{name}</span>
        </div>
        <CopyToClipboard text={name}>
          <button onClick={changeCopied} className={classes.copyButton}>
            COPY
          </button>
        </CopyToClipboard>
      </div>
      {paletteId && (
        <div className="more-section">
          <Link to={`/palette/${paletteId}/${id}`}>
            <button className={classes.more}>MORE</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(ColorBoxes);
