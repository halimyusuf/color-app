import React from 'react';
import Pallete from './components/Pallete';
import PalleteList from './components/PalleteList';
import seedColor from './seedColours';
import generatePallete from './components/ColorHelpers';
import { Route, Switch } from 'react-router-dom';
import PaletteForm from './components/NewPaletteForm';

import './App.css';
import SingleColourPalette from './components/SingleColourPalette';

const findPallete = (id) => {
  return generatePallete(seedColor.find((palette) => palette.id === id));
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

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <PalleteList {...props} palette={seedColor} />}
        />
        <Route path="/palette/new" exact component={PaletteForm} />
        <Route
          path="/palette/:id"
          exact
          render={(props) => (
            <Pallete palette={findPallete(props.match.params.id)} />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(props) => (
            <SingleColourPalette
              palette={findColourFromPalette(
                props.match.params.paletteId,
                props.match.params.colorId
              )}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
