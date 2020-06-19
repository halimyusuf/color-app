import React, { useState } from 'react';
import Palette from './components/Pallete';
import PalleteList from './components/PalleteList';
import seedColors from './seedColours';
import generatePallete from './components/ColorHelpers';
import { Route, Switch } from 'react-router-dom';
import CreateNewPalette from './components/CreateNewPalette';
import SingleColourPalette from './components/SingleColourPalette';
import './App.css';

const App = () => {
  const [palettes, setPalettes] = useState(seedColors);
  const findPallete = (id) => {
    return generatePallete(palettes.find((palette) => palette.id === id));
  };
  const findColourFromPalette = (paletteId, colorId) => {
    const palette = findPallete(paletteId);
    let values = Object.values(palette.colors).flat();
    values = values.filter((color) => color.id === colorId).slice(1);
    return {
      paletteName: palette.paletteName,
      id: palette.id,
      emoji: palette.emoji,
      colors: values,
    };
  };

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact render={(props) => <PalleteList {...props} />} />
        <Route path="/palette/new" exact component={CreateNewPalette} />
        <Route path="/palette/:id" exact component={Palette} />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(props) => (
            <SingleColourPalette
              // palette={findColourFromPalette(
              //   props.match.params.paletteId,
              //   props.match.params.colorId
              // )}
              {...props}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
