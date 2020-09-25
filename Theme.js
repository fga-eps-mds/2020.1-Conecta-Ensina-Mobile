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
    branco: '#ffffff',
    preto: 'black',
  },
  font: 'Roboto',
  fontSizes: {
    smaller: '12px',
    small: '14px',
    bigSmall: '16px',
    smallMedium: '20px',
    medium: '25px',
    bigMedium: '30px',
    big: '45px',
  },
};

const Theme = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
