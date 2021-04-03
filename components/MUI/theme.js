import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

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
      main: '#368ff5',
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
