import React from 'react';
import Pallete from './components/Pallete';
import seedColor from './seedColours';
import generatePallete from './components/ColorHelpers';

const App = () => {
  return (
    <div>
      <Pallete pallete={{ ...generatePallete(seedColor[7]) }} />
    </div>
  );
};

export default App;
