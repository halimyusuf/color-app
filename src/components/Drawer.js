import React, { useState } from 'react';
import clsx from 'clsx';
import { arrayMove } from 'react-sortable-hoc';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ColorPicker from './ColorPicker';
import DraggableColorBoxList from './DraggableColorBoxList';
import AppBarComp from './AppBar';
import styles from '../styles/DrawerStyles';

export default function PersistentDrawerLeft({ savePalette }) {
  const classes = styles();
  const [colors, setColors] = useState([
    { color: 'red', name: 'helvetica' },
    { color: 'purple', name: 'pure purple' },
  ]);
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors((colors) => arrayMove(colors, oldIndex, newIndex));
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarComp
        open={open}
        setOpen={setOpen}
        savePalette={savePalette}
        colors={colors}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.colorPicker}>
          <ColorPicker palettes={colors} setPalettes={setColors} />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.palette}>
          <DraggableColorBoxList
            colors={colors}
            setColors={setColors}
            axis="xy"
            onSortEnd={onSortEnd}
          />
        </div>
      </main>
    </div>
  );
}
