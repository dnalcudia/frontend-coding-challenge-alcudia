import { Box, Typography, Button, CircularProgress } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useDarkMode } from '../context/DarkModeContext';
import React from 'react';

interface DevFinderHeaderProps {
  isLoading?: boolean;
  onClickDarkMode: () => void;
}

export const DevFinderHeader = ({ isLoading = false, onClickDarkMode }: DevFinderHeaderProps) => {
  const { darkMode } = useDarkMode();

  return (
    <Box alignItems='center' display='flex' justifyContent='space-between' marginBottom={24} width='100%'>
      <Typography color={darkMode ? 'white' : '#141d2f'} fontSize={24} fontWeight={600}>
        devfinder
      </Typography>
      {isLoading && <CircularProgress />}
      <Button onClick={onClickDarkMode}>
        <Typography alignItems={'center'} color={darkMode ? 'white' : '#141d2f'} display={'flex'} fontSize={12} gap={8}>
          {darkMode ? 'Light' : 'Dark'}
          {darkMode ? (
            <LightModeIcon fontSize='small' sx={{ color: darkMode ? 'white' : '#141d2f' }} />
          ) : (
            <DarkModeIcon fontSize='small' sx={{ color: darkMode ? 'white' : '#141d2f' }} />
          )}
        </Typography>
      </Button>
    </Box>
  );
};
