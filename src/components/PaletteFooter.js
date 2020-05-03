import React from 'react';

const PaletteFooter = ({ paletteName, emoji }) => {
  return (
    <footer>
      <div className="palette-footer">
        {paletteName}
        <span className="palette-logo">{emoji} </span>
      </div>
    </footer>
  );
};

export default PaletteFooter;
