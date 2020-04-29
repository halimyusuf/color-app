import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import './NavBar.css';
const useStyles = makeStyles({
  root: {
    width: 300,
    height: 20,
  },
});

const NavBar = ({ changeLevel }) => {
  const classes = useStyles();
  return (
    <div className="navbar">
      <div className="brand">Color Picker</div>
      <div className="color-label">Level: </div>
      <div className={classes.root}>
        <Slider
          defaultValue={300}
          getAriaValueText={changeLevel}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={100}
          marks
          min={100}
          max={900}
        />
      </div>
    </div>
  );
};

export default NavBar;
