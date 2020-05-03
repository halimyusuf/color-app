import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteFooterStyles';

const PaletteFooter = ({ paletteName, emoji, classes }) => {
  return (
    <footer>
      <div className={classes.paletteFooter}>
        {paletteName}
        <span className="palette-logo">{emoji} </span>
      </div>
    </footer>
  );
};

export default withStyles(styles)(PaletteFooter);
