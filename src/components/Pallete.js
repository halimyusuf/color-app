import React from 'react';
import ColorBoxes from './ColorBoxes';
import './Pallete.css';

const Pallete = ({ pallete }) => {
  const renderBoxes = () => {
    const colors = pallete.colors[700];
    return colors.map((color) => <ColorBoxes key={color.name} color={color} />);
  };
  return (
    <div className="pallete">
      <div className="pallete-colors">{renderBoxes()}</div>
    </div>
  );
};

export default Pallete;
