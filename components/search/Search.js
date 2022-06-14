import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

function Search(props) {
  const { value, setValue, className } = props;

  return (
    <Paper
      component="div"
      className={className}
      sx={{
        p: '2px 6px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: '300px',
        background: '#fff',
        border: '1px solid #f0f1fa',
        boxShadow: 0,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Dogecoin to the Moon..."
        inputProps={{ 'aria-label': 'search title' }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        {value ? <ClearIcon onClick={() => setValue('')} /> : <SearchIcon />}
      </IconButton>
    </Paper>
  );
}

export default Search;
