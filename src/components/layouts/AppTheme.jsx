import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import { teal } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import { indigo } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ececec',
    },
    primary: {
      main: teal[800],
    },
    secondary: {
      main: pink[300],
    },
  },
  typography: {
    subtitle1: {
      fontSize: 20,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 'bold',
      color: grey[600],
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: teal.A700,
        },
      },
    },
  },
});

export const AppTheme = (props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {props.children}
  </ThemeProvider>
);
