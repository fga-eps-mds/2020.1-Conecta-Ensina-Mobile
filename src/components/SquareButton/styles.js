import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 95px;
  height: 95px;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.cinzaClaro};
`;

export const Imagem = styled.Image`
  height: 50px;
  width: 60px;
  margin-top: 8px;
`;

export const Nome = styled.View`
  padding-top: 10px;
`;
