import styled from 'styled-components'

export const ContainerUser = styled.View `
    width: 95px;
    height: 95px;
    margin: 30px;
    align-items: center;
    flex-direction: row-reverse;
`;

export const ContainerFiltro = styled.View `
    flex: 1;
    position: absolute;
    width: 100%;
    justifyContent: center;
    align-items: center;
    padding: 115px;
`;

export const BlocoFiltro = styled.View `
    display: flex;
    flex-direction: row;
    justifyContent: space-between;
`;

export const BotaoFiltro = styled.TouchableOpacity `
    background-color: #D9D9D9;
    width: 95px;
    height: 95px;
    border-radius: 10px;
    margin: 11.5px;
    align-items: center;
`;
export const TextoFiltro = styled.Text `
    font-weight: 700;
    font-size: 12px;
`;

export const ImagemFiltro = styled.Image `
    width: 52px;
    height: 52px;
    margin-top: 8px;
    margin-bottom: 11px;
`;

export const ImagemUser = styled.Image `
    width: 50px;
    height: 50px;
    margin-bottom: 50px;
`;

export const ContainerBotao = styled.View `
    flex: 5;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    margin: 50px;
    margin-top: 100px;
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

export const BotaoMarcarAula = styled.TouchableOpacity `
    background-color: #184E79;
    height: 49px;
    width: 204px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    margin-top: 5.5px;
`;

export const BotaoAulaUrgente = styled.TouchableOpacity `
    background-color: #E46270;
    height: 49px;
    width: 204px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    margin-top: 5.5px;
`;

export const BotaoProxAula = styled.TouchableOpacity `
    background-color: #D9D9D9;
    height: 170px;
    width: 282px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 5.5px;
`;