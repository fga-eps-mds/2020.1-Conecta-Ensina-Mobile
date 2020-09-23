import styled from 'styled-components'

export const Container = styled.TouchableOpacity`
background-color: ${(props) => props.theme.colors.azulClaro};
width: 138px;
height: 31px;
border-radius: 8px;
align-items: center;
justify-content: center;
align-self: center;
margin-bottom: 20px;
`;
export const Texto = styled.Text`
font-size: 16px;
color: #ffffff;
`;