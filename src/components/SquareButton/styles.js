import styled from 'styled-components'

export const Container = styled.TouchableOpacity`
background-color: ${(props) => props.theme.colors.cinzaClaro};
width: 95px;
height: 95px;
border-radius: 10px;
margin-right: 20px;
margin-bottom: 20px;
align-items: center;
`;

export const Imagem = styled.Image`
height: 50px;
width: 60px;
`;

export const Nome = styled.Text`
padding-top: 10px;
font-size: 12px;
`;