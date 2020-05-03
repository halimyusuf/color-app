import React from 'react';
import './MiniPalette.css';
import { Typography } from '@material-ui/core';

const MiniPalette = ({ paletteName, emoji, colors }) => {
  return (
    <div className="min-palette">
      <div className="mini-palette-colors">
        {colors.map((color) => (
          <div
            className="palette-color"
            style={{ background: color.color }}
          ></div>
        ))}
      </div>
      <div className="min-palette-title">
        <Typography> {paletteName} </Typography>
        <span className="palette-logo">{emoji}</span>
      </div>
    </div>
  );
};

export default MiniPalette;
