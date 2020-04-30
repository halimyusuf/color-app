import React from 'react';
import { Link } from 'react-router-dom';

const PalleteList = ({ palette }) => {
  return (
    <div className="palette-list">
      {palette.map((p) => (
        <div key={p.id} className="a-pallete">
          <Link to={`/${p.id}`}> {p.id} </Link>
        </div>
      ))}
    </div>
  );
};

export default PalleteList;
