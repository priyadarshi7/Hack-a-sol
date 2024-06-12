import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars() {
  const [state, setState] = React.useState({
    open: true,
    vertical: 'bottom',
    horizontal: 'right',
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '75%',backgroundColor: 'rgba(255, 255, 255, .10)',
            backdropFilter: 'blur(5px)', color:'white'}}
        >
          Welcome to the Hack-A-Sol Website!!!
        </Alert>
      </Snackbar>
    </div>
  );
}
