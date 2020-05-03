import React, { useState } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './SingleColorPalette.css';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';

const SingleColourPalette = ({ palette }) => {
  const [colorFormat, setColorFormat] = useState('hex');
  const boxes = palette.colors.map((color) => (
    <ColorBox colorFormat={colorFormat} key={color.name} color={color} />
  ));

  function onSelectChange(value) {
    setColorFormat(value);
  }

  return (
    <div className="single-colour-palette">
      <NavBar color={palette} selectChange={onSelectChange} />
      {boxes}
      <div className="color-box black-box">
        {/* <button > */}
        <Link className="copy back-btn" to={`/palette/${palette.id}`}>
          GO BACK
        </Link>
        {/* </button> */}
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};

export default SingleColourPalette;
