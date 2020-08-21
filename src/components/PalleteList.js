import React from 'react';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MiniPalette from './MiniPallete';
import { fetchPalettes, deletePalette } from '../actions/index';
import styles from '../styles/PaletteListStyles';

const PalleteList = (props) => {
  const { palette, history, classes } = props;
  const navigateToPalette = (id) => {
    history.push(`/palette/${id}`);
  };

  const onDel = (e, palette) => {
    e.stopPropagation();
    props.deletePalette(palette.id);
  };
  return (
    <div className={classes.allPalettes}>
      <nav className={classes.paletteListNav}>
        <Typography component="h5">React Colors</Typography>
        <Link to="/palette/new">
          <Typography component="h5">Create Palette </Typography>
        </Link>
      </nav>
      <div className={classes.paletteList}>
        {palette.map((p) => (
          <div
            key={p.id}
            onClick={() => navigateToPalette(p.id)}
            className={classes.aPalette}
          >
            <Paper>
              <div className={classes.btnParent}>
                <DeleteIcon
                  onClick={(e) => onDel(e, p)}
                  className={classes.deleteBtn}
                />
              </div>
              <MiniPalette {...p} />
            </Paper>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { palette: state.palette };
};

export default connect(mapStateToProps, { deletePalette })(
  withStyles(styles)(PalleteList)
);
