import React from 'react';
import Pallete from './components/Pallete';
import seedColor from './seedColours';

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Pallete {...seedColor[7]} />
      </div>
    );
  }
}

export default App;
