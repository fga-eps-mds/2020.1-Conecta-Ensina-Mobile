import styled from 'styled-components/native';

export const Texto = styled.Text`
  font-size: ${(props) =>
    props.smaller
      ? props.theme.fontSizes.smaller
      : props.small
      ? props.theme.fontSizes.small
      : props.bigSmall
      ? props.theme.fontSizes.bigSmall
      : props.medium
      ? props.theme.fontSizes.medium
      : props.bigMedium
      ? props.theme.fontSizes.bigMedium
      : props.big
      ? props.theme.fontSizes.big
      : props.theme.fontSizes.smallMedium};
  color: ${(props) =>
    props.white
      ? props.theme.colors.branco
      : props.black
      ? props.theme.colors.preto
      : props.blue
      ? props.theme.colors.fundoAzul
      : props.theme.colors.cinzaEscuro};
  font-family: ${(props) => props.theme.font};
  text-align: center;
`;
