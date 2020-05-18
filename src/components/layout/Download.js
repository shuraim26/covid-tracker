import React from 'react';
import Fab from '@material-ui/core/Fab';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Download = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab color="primary" aria-label="download" style={style} onClick={handleClickOpen}>
        <CloudDownloadIcon />
      </Fab>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"This App can be installed on your mobile device"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div style={{ display: "flex", alignItems: "center" }}>
            Tap the {"  "}<MoreVertIcon style={{ fontSize: "20px" }} /> {"  "} icon on the top right of your screen
            </div>
            <div style={{ marginTop: 10, marginBottom: 10 }}>
            Tap on <span style={{ fontStyle: "italic" }}>Add to Homescreen</span>
            </div>
            <div> You can now access this app through your app drawer </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Got It!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const style = {
  marginBottom: 50,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

export default Download
