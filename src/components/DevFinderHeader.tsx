import { Box, Typography, Button, CircularProgress } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react';

interface DevFinderHeaderProps {
  darkMode: boolean;
  isLoading?: boolean;
  onClickDarkMode: () => void;
}

export const DevFinderHeader = ({ isLoading = false, darkMode, onClickDarkMode }: DevFinderHeaderProps) => {
  return (
    <Box alignItems='center' display='flex' justifyContent='space-between' marginBottom={24} width='100%'>
      <Typography color='white' fontSize={24} fontWeight={600}>
        devfinder
      </Typography>
      {isLoading && <CircularProgress />}
      <Button onClick={onClickDarkMode}>
        <Typography alignItems={'center'} gap={8} display={'flex'} color='white' fontSize={12}>
          {darkMode ? 'Light' : 'Dark'}
          {darkMode ? <LightModeIcon fontSize='small' /> : <DarkModeIcon fontSize='small' />}
        </Typography>
      </Button>
    </Box>
  );
};
