import styles from '../styles/ColorBoxStyles';
import _ from 'lodash';
const { colorBox, copyButton } = _.pick(styles, 'colorBox', 'copyButton');

export default {
  singleColourPalette: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  palleteColours: {
    height: '90%',
  },
  blackBox: {
    ...colorBox,
    backgroundColor: 'black',
    height: '50%',
  },
  backButton: {
    ...copyButton,
    color: 'white',
    opacity: '1',
    fontSize: '80%',
  },
};
