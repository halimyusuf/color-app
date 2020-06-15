import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SketchPicker } from 'react-color';
import TextField from '@material-ui/core/TextField';
import formFieldValidator from './common/formValidator';

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
    nameExists: {
      onError: 'color name exists',
      logic: (value) =>
        palettes.some(
          (color) => color.name.toLowerCase() === value.toLowerCase()
        ),
    },

    required: {
      onError: 'Color name is required',
      logic: (value) => value.length === 0,
    },

    colorExists: {
      onError: 'Color exists',
      logic: () => palettes.some((color) => color.color === currentColor),
    },
  };

  function handleChangeComplete(color) {
    setCurrentColor(color.hex);
  }

  function onInputChange(e) {
    const value = e.target.value;
    setErrors(formFieldValidator(value, validations));
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
    let err = formFieldValidator(colorName, validations);
    const isFormValid = Object.keys(err).length === 0;
    if (isFormValid) {
      setPalettes([...palettes, { name: colorName, color: currentColor }]);
    } else {
      setErrors(err);
    }
  }

  disable = Object.keys(errors).length > 0;
  // console.log(errors);

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
