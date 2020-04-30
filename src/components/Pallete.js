import React, { useState } from 'react';
import ColorBoxes from './ColorBoxes';
import './Pallete.css';
import NavBar from './NavBar';

const Pallete = ({ pallete }) => {
  const [level, setLevel] = useState(600);
  const [colorFormat, setColorFormat] = useState('hex');
  const colors = pallete.colors[level];
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
      <div className="pallete">
        <NavBar
          changeLevel={valuetext}
          color={colors}
          selectChange={onSelectChange}
        />
        <div className="pallete-colors">{renderBoxes()}</div>
        <footer>
          <div className="pallete-footer">
            {pallete.paletteName}{' '}
            <span className="pallete-logo">{pallete.emoji} </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Pallete;
