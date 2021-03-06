import React from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';

const Notify = ({ message, duration, notify, setNotify }) => {
  const closeBar = () => {
    setNotify(false);
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        open={notify}
        autoHideDuration={duration}
        // message={<span id="message-id">{message}</span>}
        // ContentProps={{
        //   'aria-describedby': 'message-id',
        // }}
        onClose={closeBar}
        action={
          <IconButton
            onClick={closeBar}
            key="close"
            aria-label="close"
            color="inherit"
          >
            <CloseIcon />
          </IconButton>
        }
      >
        <Alert severity="success">{message}</Alert>
      </Snackbar>
    </>
  );
};

export default Notify;
