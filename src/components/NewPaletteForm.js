import React from 'react';
import Drawer from './Drawer';

const PaletteForm = (props) => {
  const { palettes, setPalettes } = props;
  function savePalette(newPalettes) {
    if (newPalettes === null) {
      props.history.push('/');
      return;
    }
    newPalettes = { name: 'sample pal', id: 'simple-pal', colors: newPalettes };
    setPalettes([...palettes, newPalettes]);
    props.history.push('/');
  }
  return (
    <div>
      <Drawer savePalette={savePalette} />
    </div>
  );
};

export default PaletteForm;
