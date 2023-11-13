import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  spacing: (factor: number) => `${1 * factor}px`,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: '#141d2f',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: 'white',
          fontSize: '16px',
        },
        notchedOutline: {
          border: 'none',
        },
        input: {
          padding: 0,
        },
      },
    },
  },
});
