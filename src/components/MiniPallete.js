import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import styles from '../styles/MiniPaletteStyles';

const MiniPalette = ({ paletteName, emoji, colors, classes }) => {
  return (
    <div className={classes.minPalette}>
      <div className={classes.miniPaletteColors}>
        {colors.map((color) => (
          <div
            key={color.color}
            className={classes.paletteColor}
            style={{ background: color.color }}
          ></div>
        ))}
      </div>
      <div className={classes.minPaletteTitle}>
        <Typography> {paletteName} </Typography>
        <span className="palette-logo">{emoji}</span>
      </div>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
