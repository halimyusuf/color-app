import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import NewPaletteDialog from './NewPaletteDialog';
import history from '../history';
import { down, up } from '../styles/media';

const drawerWidth = 250;

const useStyle = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'white',
    color: 'black',
    '& p': {
      fontSize: '13px',
      [up('sm')]: {
        fontSize: '1.5em',
      },
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  paletteActionBtn: {
    marginLeft: 'auto',
    '& button': {
      margin: '0 2px',
      [down('xm')]: {
        margin: '0',
        padding: '0.5',
      },
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
}));

const AppBarComp = (props) => {
  const { setOpen, open, savePalette } = props;
  const [openDialogForm, setOpenDialogForm] = useState(false);
  const classes = useStyle();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="body2" component="p" noWrap>
            Create New Palette
          </Typography>
          <div className={classes.paletteActionBtn}>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => history.push('/')}
            >
              GO Back
            </Button>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => setOpenDialogForm(true)}
            >
              Save
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {openDialogForm && (
        <NewPaletteDialog close={setOpenDialogForm} savePalette={savePalette} />
      )}
    </div>
  );
};

export default AppBarComp;
