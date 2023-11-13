import React, { KeyboardEvent } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  value: string;
  placeholder: string;
  isLoading?: boolean;
  onChangeTextField: (value: string) => void;
  onClickSearch: () => void;
}

export const SearchBar = ({
  isLoading = false,
  placeholder,
  value,
  onClickSearch,
  onChangeTextField,
}: SearchBarProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onClickSearch();
    }
  };

  return (
    <Box
      alignItems='center'
      borderRadius={'8px'}
      boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
      display='flex'
      justifyContent='space-between'
      gap={8}
      marginBottom={16}
      padding={12}
      sx={{ backgroundColor: '#1e2a47' }}
      width='100%'
    >
      <Box alignItems='center' display='flex' gap={8} width='100%'>
        <SearchIcon fontSize='large' sx={{ color: '#056be0' }} />
        <TextField
          value={value}
          fullWidth
          placeholder={placeholder}
          variant='outlined'
          onChange={e => onChangeTextField(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </Box>
      <Button
        disabled={isLoading}
        variant='contained'
        sx={{ padding: 2, textTransform: 'none' }}
        onClick={onClickSearch}
      >
        Search
      </Button>
    </Box>
  );
};
