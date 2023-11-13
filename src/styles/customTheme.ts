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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
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
