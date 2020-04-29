import React from 'react';
import Pallete from './components/Pallete';
import seedColor from './seedColours';
import generatePallete from './components/ColorHelpers';

class App extends React.Component {
  state = {};
  render() {
    console.log(generatePallete(seedColor[8]));

    return (
      <div>
        <Pallete {...seedColor[7]} />
      </div>
    );
  }
}

export default App;
