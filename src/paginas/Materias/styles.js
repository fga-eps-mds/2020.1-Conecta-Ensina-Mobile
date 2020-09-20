import styled from 'styled-components'

export const BlueContainer = styled.View `
    flex: 1;
    background-color: #184E79;
    flex-direction: row-reverse;
    align-items: center;
`;
export const WhiteContainer = styled.View `
    flex: 3;
    background-color: #ffffff;
`;
export const ContainerMaterias = styled.View `
    flex: 1;
    position: absolute;
    width: 100%;
    justifyContent: center;
    align-items: center;
    padding: 115px;
`;
export const ContainerUser = styled.View `
    width: 95px;
    height: 95px;
    margin: 30px;
    align-items: center;
`;

export const BlocoMaterias = styled.View `
    flex: 1;
    display: flex;
    flex-direction: row;
    justifyContent: space-between;
`;

export const BotaoMateria = styled.TouchableOpacity `
    background-color: #D9D9D9;
    width: 95px;
    height: 95px;
    border-radius: 10px;
    margin: 11.5px;
    align-items: center;
`;
export const TextoMateria = styled.Text `
    font-weight: 700;
    font-size: 12px;
`;
export const BotaoContinuar = styled.TouchableOpacity `
    background-color: #297FB8;
    height: 30px;
    width: 135px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 5.5px;
`;
export const TextoContinuar = styled.Text `
    color: #ffffff;
    font-family: Roboto;
    font-weight: 700;
    font-size: 15px;
`;
export const ImagemMateria = styled.Image `
    width: 52px;
    height: 52px;
    margin-top: 8px;
    margin-bottom: 11px;
`;

export const ImagemUser = styled.Image `
    width: 34px;
    height: 39px;
    top: 21px;
    margin-top: 10px;
    margin-bottom: 10px;
`;