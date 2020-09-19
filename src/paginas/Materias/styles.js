import styled from 'styled-components'

export const Container = styled.View `
    background-color: #ffffff;
    align-items: center;
`;
export const BlocoMaterias = styled.View `
    display: flex;
    flex-direction: row;
`;
export const BotaoMateria = styled.TouchableOpacity `
    background-color: #D9D9D9;
    width: 95px;
    height: 95px;
    border-radius: 10px;
    margin: 11.5px;
    align-items: center;
`
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