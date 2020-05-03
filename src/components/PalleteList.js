import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography, Paper } from '@material-ui/core';
import MiniPalette from './MiniPallete';
import styles from '../styles/PaletteListStyles';

const PalleteList = ({ palette, history, classes }) => {
  const navigateToPalette = (id) => {
    history.push(`/palette/${id}`);
  };
  return (
    <div className={classes.allPalettes}>
      <nav className={classes.paletteListNav}>
        <Typography component="h5">React Colors</Typography>
      </nav>
      <div className={classes.paletteList}>
        {palette.map((p) => (
          <div
            key={p.id}
            className={classes.aPalette}
            onClick={() => navigateToPalette(p.id)}
          >
            <Paper>
              <MiniPalette {...p} />
            </Paper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(PalleteList);
