import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import ColorBoxes from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import styles from '../styles/PaletteStyles';

const Pallete = ({ palette, classes }) => {
  const [level, setLevel] = useState(600);
  const [colorFormat, setColorFormat] = useState('hex');
  const colors = palette.colors[level];
  const renderBoxes = () => {
    return colors.map((color) => (
      <ColorBoxes
        paletteId={palette.id}
        colorFormat={colorFormat}
        key={color.name}
        color={color}
      />
    ));
  };

  function valuetext(value) {
    setLevel(value);
  }

  function onSelectChange(value) {
    setColorFormat(value);
  }

  return (
    <>
      <div className={classes.palette}>
        <NavBar
          changeLevel={valuetext}
          color={colors}
          selectChange={onSelectChange}
        />
        <div className={classes.paletteColours}>{renderBoxes()}</div>
        <PaletteFooter
          paletteName={palette.paletteName}
          emoji={palette.emoji}
        />
      </div>
    </>
  );
};

export default withStyles(styles)(Pallete);
