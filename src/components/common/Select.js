import React from 'react';
import { Select, MenuItem } from '@material-ui/core';

const useSelect = ({ options, onChange, defaultVal }) => {
  return (
    <>
      <Select value={defaultVal} onChange={onChange}>
        {options.map((option) => (
          <MenuItem value={option.value}> {option.name} </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default useSelect;
