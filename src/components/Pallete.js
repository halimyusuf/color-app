import React, { useState } from 'react';
import ColorBoxes from './ColorBoxes';
import './Pallete.css';
import NavBar from './NavBar';

const Pallete = ({ palette }) => {
  const [level, setLevel] = useState(600);
  const [colorFormat, setColorFormat] = useState('hex');
  const colors = palette.colors[level];
  const renderBoxes = () => {
    return colors.map((color) => (
      <ColorBoxes colorFormat={colorFormat} key={color.name} color={color} />
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
      <div className="palette">
        <NavBar
          changeLevel={valuetext}
          color={colors}
          selectChange={onSelectChange}
        />
        <div className="palette-colors">{renderBoxes()}</div>
        <footer>
          <div className="palette-footer">
            {palette.paletteName}{' '}
            <span className="palette-logo">{palette.emoji} </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Pallete;
