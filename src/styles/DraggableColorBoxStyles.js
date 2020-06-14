import { makeStyles } from '@material-ui/core/styles';

const styles = {
  paletteColors: {
    height: '100%',
  },
  colorBox: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    cursor: 'pointer',
    position: 'relative',
    textTransform: 'uppercase',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.3)',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    bottom: '0',
    left: '0px',
    padding: '5px',
    color: 'rgb(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default makeStyles(styles);
