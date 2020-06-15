import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { findColourFromPalette } from './ColorHelpers';
import generatePaletteShades from './ColorHelpers';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import styles from '../styles/SingleColourPaletteStyles';

const SingleColourPalette = (props) => {
  let { palette, classes } = props;
  palette = generatePaletteShades(palette);
  // console.log(props);

  const colorPalette = findColourFromPalette(
    palette,
    props.match.params.colorId
  );

  console.log(colorPalette);

  const [colorFormat, setColorFormat] = useState('hex');
  const boxes = colorPalette.colors.map((color) => (
    <ColorBox colorFormat={colorFormat} key={color.name} color={color} />
  ));

  function onSelectChange(value) {
    setColorFormat(value);
  }

  return (
    <div className={classes.singleColourPalette}>
      <NavBar color={colorPalette} selectChange={onSelectChange} />
      <div className={classes.palleteColours}>
        {boxes}
        <div className={classes.blackBox}>
          <Link className={classes.backButton} to={`/palette/${palette.id}`}>
            GO BACK
          </Link>
        </div>
      </div>
      <PaletteFooter
        paletteName={colorPalette.paletteName}
        emoji={colorPalette.emoji}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const { paletteId } = ownProps.match.params;
  return {
    palette: state.palette.find((p) => paletteId === p.id),
  };
};

export default connect(mapStateToProps)(
  withStyles(styles)(SingleColourPalette)
);
