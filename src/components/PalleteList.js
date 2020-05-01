import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';
import MiniPalette from './MiniPallete';
import './PaletteList.css';

const PalleteList = ({ palette }) => {
  return (
    <div className="all-palettes">
      <nav className="palette-list-nav">
        <Typography component="h5">React Colors</Typography>
      </nav>
      <div className="palette-list">
        {palette.map((p) => (
          <div key={p.id} className="a-palette">
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
