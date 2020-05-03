import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import MiniPalette from './MiniPallete';
import './PaletteList.css';

const PalleteList = ({ palette, history }) => {
  const navigateToPalette = (id) => {
    history.push(`/palette/${id}`);
  };
  return (
    <div className="all-palettes">
      <nav className="palette-list-nav">
        <Typography component="h5">React Colors</Typography>
      </nav>
      <div className="palette-list">
        {palette.map((p) => (
          <div
            key={p.id}
            className="a-palette"
            onClick={() => navigateToPalette(p.id)}
          >
            <Paper>
              <MiniPalette {...p} />
            </Paper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PalleteList;
