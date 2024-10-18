import React from 'react';
import { TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Import the search icon

const SearchBar = ({ onSearch }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <TextField
      style={{ width: '500px' }}
      variant="outlined"
      label="Search Pokémon"
      placeholder="Search..."
      onChange={(e) => onSearch(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
    />
    <Button
      variant="contained"
      style={{
        height: '56px', 
        backgroundColor: '#004368', 
        color: 'white', 
       
      }}
      onClick={() => onSearch(e.target.value)} 
    >
      Search
    </Button>
  </div>
);

export default SearchBar;