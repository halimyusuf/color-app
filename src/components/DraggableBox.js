import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  colorBox: {
    height: '200px',
    width: '100%',
  },
});

const DraggableBox = (props) => {
  const classes = useStyle();
  return (
    <div>
      {props.palettes.map((color) => (
        <div
          className={classes.colorBox}
          style={{ background: color.color }}
        ></div>
      ))}
    </div>
  );
};

export default DraggableBox;
