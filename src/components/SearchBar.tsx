import React, { KeyboardEvent } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDarkMode } from '../context/DarkModeContext';

interface SearchBarProps {
  activeUsername: string;
  placeholder: string;
  value: string;
  isLoading?: boolean;
  onChangeTextField: (value: string) => void;
  onClickSearch: () => void;
}

export const SearchBar = ({
  activeUsername,
  placeholder,
  value,
  isLoading = false,
  onChangeTextField,
  onClickSearch,
}: SearchBarProps) => {
  const { darkMode } = useDarkMode();

  const isSearchButtonDisabled = isLoading || value === '' || value === activeUsername;
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && value !== '' && value !== activeUsername) {
      onClickSearch();
    }
  };

  return (
    <Box
      alignItems='center'
      borderRadius={'8px'}
      boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
      boxSizing={'border-box'}
      display='flex'
      gap={8}
      justifyContent='space-between'
      marginBottom={16}
      padding={12}
      sx={{ backgroundColor: darkMode ? '#1e2a47' : 'white' }}
      width='100%'
    >
      <Box alignItems='center' display='flex' gap={8} width='100%'>
        <SearchIcon fontSize='large' sx={{ color: '#056be0' }} />
        <TextField
          fullWidth
          placeholder={placeholder}
          sx={{
            color: darkMode ? 'white' : '#141d2f',
            '& .MuiOutlinedInput-root': {
              color: darkMode ? 'white' : '#141d2f',
            },
          }}
          value={value}
          variant='outlined'
          onChange={e => onChangeTextField(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </Box>
      <Button
        disabled={isSearchButtonDisabled}
        sx={{ padding: 2, textTransform: 'none' }}
        variant='contained'
        onClick={onClickSearch}
      >
        Search
      </Button>
    </Box>
  );
};
