import React, { useState } from 'react';
import ColorBoxes from './ColorBoxes';
import './Pallete.css';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 20,
  },
});

const Pallete = ({ pallete }) => {
  const classes = useStyles();
  const [level, setLevel] = useState(300);
  const renderBoxes = () => {
    const colors = pallete.colors[level];
    return colors.map((color) => <ColorBoxes key={color.name} color={color} />);
  };

  function valuetext(value) {
    setLevel(value);
  }

  return (
    <>
      <div className={classes.root}>
        <Slider
          defaultValue={300}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={100}
          marks
          min={100}
          max={900}
        />
      </div>
      <div className="pallete">
        <div className="pallete-colors">{renderBoxes()}</div>
      </div>
    </>
  );
};

export default Pallete;
