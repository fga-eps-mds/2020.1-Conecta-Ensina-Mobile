import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.cinzaClaro};
  width: 152px;
  height: 95px;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  align-items: center;
`;

export const Imagem = styled.Image`
  margin-top: 6px;
  height: 48px;
  width: 40px;
`;

export const ContainerTexto = styled.View`
  padding-top: 3px;
  font-size: 12px;
`;
