export default {
  allPalettes: {
    width: '100%',
    marginTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
  },
  paletteListNav: {
    display: 'flex',
    marginLeft: '20%',
    '& h5': {
      margin: '7px',
    },
  },
  paletteList: {
    width: '60%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  aPalette: {
    width: '300px',
    margin: '5px',
    minHeight: '200px',
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover svg': {
      display: 'inline',
    },
  },
  btnParent: {
    width: '100%',
  },
  deleteBtn: {
    position: 'absolute',
    backgroundColor: 'red',
    right: '0%',
    color: 'white',
    width: '1.5em',
    cursor: 'pointer',
    zIndex: '10',
    display: 'None',
  },
};
