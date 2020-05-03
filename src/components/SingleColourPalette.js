import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './SingleColorPalette.css';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';

import styles from '../styles/SingleColourPaletteStyles';

const SingleColourPalette = ({ palette, classes }) => {
  const [colorFormat, setColorFormat] = useState('hex');
  const boxes = palette.colors.map((color) => (
    <ColorBox colorFormat={colorFormat} key={color.name} color={color} />
  ));

  function onSelectChange(value) {
    setColorFormat(value);
  }

  return (
    <div className={classes.singleColourPalette}>
      <NavBar color={palette} selectChange={onSelectChange} />
      <div className={classes.palleteColours}>
        {boxes}
        <div className={classes.blackBox}>
          <Link className={classes.backButton} to={`/palette/${palette.id}`}>
            GO BACK
          </Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};

export default withStyles(styles)(SingleColourPalette);
