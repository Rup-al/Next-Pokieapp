"use client";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const FilterBar = ({ types, onFilter }) => {
  const [selectedType, setSelectedType] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedType(value);
    onFilter(value);
  };

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>Type</InputLabel>
      <Select
      style={{ width:'300px'}}
        value={selectedType}
        onChange={handleChange}
        label="Type"
      >
        <MenuItem value="">
          <em>All Types</em>
        </MenuItem>
        {types.map((type) => (
          <MenuItem key={type} value={type}>
            {capitalize(type)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterBar;
