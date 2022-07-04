import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
   
    primary: {
        
        main: '#673AB7',
       
      },
      secondary: {
        light: '#9575CD',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
      // dois índices dentro de sua paleta tonal.
      // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
      tonalOffset: 0.2,
    }})

