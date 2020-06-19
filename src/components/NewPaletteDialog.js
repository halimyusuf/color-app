import React, { useState } from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import formFieldValidator from './common/formValidator';

const NewPalleteDialog = (props) => {
  const { close } = props;
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('');
  const [errors, setErrors] = useState(null);

  const onAdd = () => {
    const isValid = formFieldValidator(name, nameValidations);
    if (Object.keys(isValid).length === 0) {
      setErrors({ name: {} });
      props.savePalette({ name, emoji });
      close(false);
    } else {
      setErrors({ name: isValid });
    }
  };

  const handleClose = () => {
    close(false);
  };

  const onChangeText = (e) => {
    setName(e.target.value);
    const isValid = formFieldValidator(e.target.value, nameValidations);
    if (Object.keys(isValid).length === 0) {
      setErrors({ name: {} });
    } else {
      setErrors({ name: isValid });
    }
  };

  const nameValidations = {
    required: { onError: 'Name is required', logic: (v) => !v },
    nameExists: {
      onError: 'Pallete name exists',
      logic: (v) =>
        props.palettes.some(
          (palette) => palette.paletteName.toLowerCase() === v.toLowerCase()
        ),
    },
  };

  return (
    <div>
      <Dialog open={true} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Add pallete name and emoji
        </DialogTitle>
        <DialogContent>
          <TextField
            error={!!errors?.name.required || !!errors?.name.nameExists}
            helperText={errors?.name.required || errors?.name.nameExists}
            autoFocus
            margin="dense"
            id="emoji"
            label="Pallete name"
            type="email"
            value={name}
            onChange={onChangeText}
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="emoji"
            label="Emoji"
            type="email"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { palettes: state.palette };
};

export default connect(mapStateToProps)(NewPalleteDialog);
