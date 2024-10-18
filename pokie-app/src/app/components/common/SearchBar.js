import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => (
  <TextField
  style={{ width:'300px'}}
    variant="outlined"
    label="Search Pokémon"
    onChange={(e) => onSearch(e.target.value)}
    fullWidth
  />
);

export default SearchBar;
