import React from 'react';
import Pallete from './components/Pallete';
import seedColor from './seedColours';
import generatePallete from './components/ColorHelpers';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Pallete pallete={{ ...generatePallete(seedColor[7]) }} />
    </div>
  );
};

export default App;
