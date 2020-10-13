import styled from  'styled-components/native'

export const ContainerVisualAula = styled.View`
    background-color: ${(props) => props.theme.colors.cinzaClaro};
    width: 144px;
    height: 223px;
    border-radius: 10px;
    margin-right: 20px;
    margin-bottom: 20px;
`; 

export const ListaVisualAula = styled.FlatList`
    left: 10%;
    position: absolute;
    padding-bottom: 25%;
    align-self: center; 
`;

export const ButtonConfirmar = styled.TouchableOpacity` 
    width: 35px;
    height: 35px    
    background-color: green;
`;

export const ButtonRecusar = styled.TouchableOpacity`
    width: 35px;
    height:35px;
    background-color: red;
`;

export const ContainerButtons = styled.View`
    justify-content: flex-end;
    height: 35px;
    width: 95px;
`;

export const ContainerTexto = styled.View`
    
`;