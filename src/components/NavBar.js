import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { Slider, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Selector from './common/Select';
import Notify from './common/Notify';
import styles from '../styles/NavBarStyles';

const NavBar = ({ changeLevel, selectChange, classes }) => {
  const [selectValue, setSelectValue] = useState('hex');
  const [notify, setNotify] = useState(false);
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
    <div className={classes.navbar}>
      <div className={classes.brand}>
        <Typography>
          <Link to="/">Color Picker</Link>
        </Typography>
      </div>
      {changeLevel && (
        <div className={classes.slider}>
          <div>Level: </div>
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
        </div>
      )}
      <div className={classes.selectedColourFormat}>
        <Selector
          options={selectValues}
          onChange={onSelectChange}
          defaultVal={selectValue}
        />
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

export default withStyles(styles)(NavBar);
