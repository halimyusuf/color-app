import { makeStyles } from '@material-ui/core/styles';
import { down } from './media';

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
    [down('md')]: {
      width: '50%',
      height: '20%',
    },
    [down('sm')]: {
      width: '100%',
      height: '10%',
    },
    [down('xs')]: {
      width: '100%',
      height: '5%',
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
    fontWeight: 'bold',
  },
};

export default makeStyles(styles);
