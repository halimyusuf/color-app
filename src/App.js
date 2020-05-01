import React from 'react';
import Pallete from './components/Pallete';
import PalleteList from './components/PalleteList';
import seedColor from './seedColours';
import generatePallete from './components/ColorHelpers';
import { Route, Switch } from 'react-router-dom';

import './App.css';

const findPallete = (id) => {
  return generatePallete(seedColor.find((palette) => palette.id === id));
};

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <PalleteList palette={seedColor} />}
        />
        <Route
          path="/:id"
          exact
          render={(props) => (
            <Pallete palette={findPallete(props.match.params.id)} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
