import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Slider } from '@material-ui/core';
import './NavBar.css';
import Selector from './common/Select';
import Notify from './common/Notify';
const useStyles = makeStyles({
  root: {
    width: 300,
    height: 20,
  },
});

const NavBar = ({ changeLevel, selectChange }) => {
  const [selectValue, setSelectValue] = useState('hex');
  const [notify, setNotify] = useState(false);
  const classes = useStyles();

  const onSelectChange = (event) => {
    selectChange(event.target.value);
    setSelectValue(event.target.value);
    setNotify(true);
  };

  const selectValues = [
    { value: 'hex', name: 'HEX' },
    { value: 'rgb', name: 'RGB' },
    { value: 'rgba', name: 'RGBA' },
  ];

  return (
    <div className="navbar">
      <div className="brand">Color Picker</div>
      <div className="color-label">Level: </div>
      <div className={classes.root}>
        <Slider
          defaultValue={600}
          getAriaValueText={changeLevel}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={100}
          marks
          min={100}
          max={900}
        />
      </div>
      <div className="select-color-format">
        <Selector
          options={selectValues}
          onChange={onSelectChange}
          defaultVal={selectValue}
        />
        {console.log('again')}
        <Notify
          message="Format changed"
          notify={notify}
          setNotify={setNotify}
          duration={3000}
        />
      </div>
    </div>
  );
};

export default NavBar;
