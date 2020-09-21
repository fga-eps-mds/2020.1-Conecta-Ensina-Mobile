import React from 'react';
import {ThemeProvider} from 'styled-components';

const theme = {
  colors: {
    fundoAzul: '#184E79',
    cinzaClaro: '#D9D9D9',
    cinzaEscuro: '#596C7C',
    vermelho: '#E46270',
    azulClaro: '#297FB8',
    verde: '#3FB93B',
    verdeEscuro: '#2D9D49',
    botãoLoginNaoApertado: '#8B99A5',
  },
  font: 'Roboto',
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

const Theme = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
