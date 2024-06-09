import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '80%',backgroundColor: 'rgba(255, 255, 255, .10)',
            backdropFilter: 'blur(5px)', color:'white'}}
        >
          Welcome to the Hack-A-Sol Website!!!
        </Alert>
      </Snackbar>
    </div>
  );
}
