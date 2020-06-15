import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import formFieldValidator from './common/formValidator';

const NewPalleteDialog = (props) => {
  const [open, setOpen] = React.useState(true);
  const { close, add } = props;
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('');
  const [errors, setErrors] = useState(null);

  const onClose = () => {
    close();
  };

  // const validateForm = () => {

  // }

  const onAdd = () => {
    const isValid = formFieldValidator(name, nameValidations);
    if (Object.keys(isValid).length === 0) {
      // form is valid
    } else {
      setErrors({ name: isValid });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const nameValidations = {
    required: { onError: 'Name is required', logic: (v) => !!v },
    nameExists: {
      onError: 'Pallete name exists',
      logic: (v) => props.palettes.some((palette) => palette.name === v),
    },
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Add pallete name and emoji
        </DialogTitle>
        <DialogContent>
          <TextField
            error={!!errors.name.required || !!errors.name.nameExists}
            helperText={errors.name.required || errors.name.nameExists}
            autoFocus
            margin="dense"
            id="emoji"
            label="Pallete name"
            type="email"
            value={name}
            onChange={(e) => setName(e.target.name)}
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
          <Button onClick={onClose} color="primary">
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

export default NewPalleteDialog;
