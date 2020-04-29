import React, { useState } from 'react';
import ColorBoxes from './ColorBoxes';
import './Pallete.css';
import NavBar from './NavBar';

const Pallete = ({ pallete }) => {
  const [level, setLevel] = useState(300);
  const renderBoxes = () => {
    const colors = pallete.colors[level];
    return colors.map((color) => <ColorBoxes key={color.name} color={color} />);
  };

  function valuetext(value) {
    setLevel(value);
  }

  return (
    <>
      <div className="pallete">
        <NavBar changeLevel={valuetext} />
        <div className="pallete-colors">{renderBoxes()}</div>
      </div>
    </>
  );
};

export default Pallete;
