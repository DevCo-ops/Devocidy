import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    common: {
      white: '#bed1d0',
    },
    primary: {
      light: '#4fb3bf',
      main: '#00838f',
      dark: '#005662',
    },
    secondary: {
      main: '#80cbc4',
      light: '#b2fef7',
      dark: '#4f9a94'
    },
    error: {
      main: '#913029',
    },
    background: {
      default: '#a1bfbe',
    },
  },
});

export default theme;
