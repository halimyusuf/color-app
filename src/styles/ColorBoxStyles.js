import chroma from 'chroma-js';
export default {
  textColor: {
    color: (props) => {
      const color = props.color[props.colorFormat];
      return chroma(color).luminance() > 0.7 ? 'black' : 'white';
    },
  },
  colorBox: {
    width: '20%',
    height: (props) => (props.paletteId ? '25%' : '50%'),
    display: 'inline-block',
    cursor: 'pointer',
    position: 'relative',
    textTransform: 'uppercase',
    '&:hover button': {
      opacity: 1,
    },
  },
  boxContent: {
    position: 'absolute',
    bottom: '0',
    left: '10px',
    color: 'white',
  },
  copyButton: {
    color: (props) => {
      const color = props.color[props.colorFormat];
      return chroma(color).luminance() > 0.7 ? 'black' : 'white';
    },
    backgroundColor: 'rgb(221, 221, 221, 0.3)',
    border: '0',
    width: '100px',
    height: '30px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    opacity: '0',
    textAlign: 'center',
    lineHeight: '30px',
    cursor: 'pointer',
    outlineColor: 'white',
    textDecoration: 'none',
  },
  overlay: {
    width: '100%',
    height: '100%',
    zIndex: '0',
    opacity: '0',
    transition: '0.5s',
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(10)',
    zIndex: '10',
    position: 'fixed',
  },
  copiedText: {
    margin: 'auto',
    position: 'fixed',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    opacity: '0',
    color: 'white',
    fontWeight: '200',
    fontFamily: 'fantasy',
    width: '100%',
    height: '100px',
    backgroundColor: 'rgb(221, 221, 221, 0.3)',
  },
  showCopiedText: {
    color: (props) => {
      const color = props.color[props.colorFormat];
      return chroma(color).luminance() > 0.7 ? 'black' : 'white';
    },
    opacity: '1',
    zIndex: '20',
    display: 'flex',
  },
  more: {
    color: (props) => {
      const color = props.color[props.colorFormat];
      return chroma(color).luminance() > 0.7 ? 'black' : 'white';
    },
    position: 'absolute',
    bottom: '0',
    right: '0',
    backgroundColor: 'rgb(221, 221, 221, 0.3)',
    textAlign: 'center',
    lineHeight: '30px',
    border: 'none',
    outlineColor: 'white',
    cursor: 'pointer',
  },
};
