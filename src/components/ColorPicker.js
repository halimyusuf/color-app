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
  paletteForm: {
    marginTop: '25px',
    textAlign: 'center',
    '& button': {
      marginTop: '3px',
    },
  },
  btnActions: {},
  colorPicker: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const ColorPicker = (props) => {
  const { palettes, setPalettes } = props;
  const [currentColor, setCurrentColor] = useState('red');
  const [colorName, setColorName] = useState('');
  const [errors, setErrors] = useState({});
  const classes = useStyles();
  let disable = true;

  const validations = {
    required: 'Color name is required',
    nameExists: 'color name exists',
    colorExists: 'Color exists',
  };
  function handleChangeComplete(color) {
    setCurrentColor(color.hex);
  }

  function validator(value) {
    let errObj = {};
    for (let validateKey of Object.keys(validations)) {
      if (validateKey === 'nameExists') {
        const exist = palettes.some((color) => color.name === value);
        if (exist) {
          errObj[validateKey] = validations[validateKey];
        } else {
        }
      } else if (validateKey === 'required') {
        if (value.length === 0) {
          errObj[validateKey] = validations[validateKey];
        } else {
        }
      } else if (validateKey === 'colorExists') {
        const exist = palettes.some((color) => color.color === currentColor);
        if (exist) {
          errObj[validateKey] = validations[validateKey];
        } else {
        }
      }
    }
    setErrors(errObj);
    return errObj;
  }

  function onInputChange(e) {
    const value = e.target.value;
    validator(value);
    setColorName(value);
  }

  function getRandomColor() {
    let randomColor = '';
    let bool;
    do {
      randomColor = '#' + Math.floor(Math.random() * 15777216).toString(16);
      bool = palettes.some((color) => color.color === randomColor);
      console.log(bool);
    } while (bool);
    setCurrentColor(randomColor);
  }

  function clearPalette() {
    setPalettes([]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let err = validator(colorName);
    disable = Object.keys(err).length === 0;
    if (disable) {
      setPalettes([...palettes, { name: colorName, color: currentColor }]);
    }
  }

  disable = Object.keys(errors).length > 0;
  return (
    <div className={classes.paletteForm}>
      <div className={classes.btnActions}>
        <Button
          onClick={clearPalette}
          variant="contained"
          size="small"
          color="secondary"
        >
          Clear Palette
        </Button>
        <Button
          onClick={getRandomColor}
          variant="contained"
          size="small"
          color="primary"
        >
          Random Color
        </Button>
      </div>
      <div className={classes.colorPicker}>
        <SketchPicker
          color={currentColor}
          onChangeComplete={handleChangeComplete}
        />
      </div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          error={Boolean(
            errors.required || errors.colorExists || errors.nameExists
          )}
          value={colorName}
          onChange={onInputChange}
          helperText={
            errors.required || errors.colorExists || errors.nameExists
          }
          id="standard-basic"
          label="Color name"
        />
        <Button
          disabled={disable}
          variant="contained"
          color="primary"
          style={{ background: currentColor }}
          type="submit"
        >
          ADD COLOR
        </Button>
      </form>
      <div></div>
    </div>
  );
};

export default ColorPicker;
