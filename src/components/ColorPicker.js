import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SketchPicker } from 'react-color';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState('red');
  const [colorValue, setColorValue] = useState('');
  const [errors, setErrors] = useState({});
  const classes = useStyles();
  function handleChangeComplete(color) {
    setCurrentColor(color.hex);
  }
  function onInputChange(e) {
    const value = e.target.value;
    if (value.length === 0) {
      setErrors({ required: 'Color name is required' });
    } else {
      setErrors({ ...errors, required: undefined });
    }
    setColorValue(value);
  }
  //   function validate(e) {
  //     console.log(e);
  //   }
  return (
    <div>
      <div>
        <Button variant="contained" size="small" color="secondary">
          Clear Palette
        </Button>
        <Button variant="contained" size="small" color="primary">
          Random Color
        </Button>
      </div>
      <div>
        <SketchPicker
          color={currentColor}
          onChangeComplete={handleChangeComplete}
        />
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          error={Boolean(errors.required)}
          value={colorValue}
          onChange={onInputChange}
          helperText={errors.required}
          id="standard-basic"
          label="Color name"
        />
      </form>
      <div>
        <Button
          variant="contained"
          color="primary"
          style={{ background: currentColor }}
        >
          ADD COLOR
        </Button>
      </div>
    </div>
  );
};

export default ColorPicker;
