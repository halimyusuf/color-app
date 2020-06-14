import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import styles from '../styles/DraggableColorBoxStyles';

const DraggableColorBox = (props) => {
  const classes = styles();
  const { color, deleteColor } = props;
  return (
    <div className={classes.colorBox} style={{ background: color.color }}>
      <div className={classes.boxContent}>
        <span>{color.name}</span>
        <span>
          <DeleteIcon onClick={() => deleteColor(color.name)} />
        </span>
      </div>
    </div>
  );
};

export default SortableElement(DraggableColorBox);
