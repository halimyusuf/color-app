import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const useStyle = makeStyles({
  paletteColors: {
    height: '100%',
  },
});

const DraggableColorBoxList = (props) => {
  const classes = useStyle();
  const { colors, setColors } = props;
  function deleteColor(colorName) {
    let colorsClone = [...colors];
    colorsClone = colors.filter((color) => color.name !== colorName);
    setColors(colorsClone);
  }

  return (
    <div className={classes.paletteColors}>
      {colors.map((color, index) => (
        <DraggableColorBox
          index={index}
          key={color.name}
          color={color}
          deleteColor={deleteColor}
        />
      ))}
    </div>
  );
};

export default SortableContainer(DraggableColorBoxList);
