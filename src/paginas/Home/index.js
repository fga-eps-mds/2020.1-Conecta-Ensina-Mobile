import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { ImagemUser } from '../Home/styles';
import {BotaoFiltro, TextoFiltro, BlocoFiltro} from './styles';
import {BlueContainer, WhiteContainer, ImagemFiltro, ContainerFiltro, ContainerUser, ContainerBotao} from './styles';
import {TextoContinuar, BotaoAulaUrgente, BotaoMarcarAula, BotaoProxAula} from './styles'
// import { Container } from './styles';

export default function Home({navigation}){
  return(
    <>
    <BlueContainer>
      <ContainerUser>
        <ImagemUser source={require("../../assets/icons/user.png")} />
      </ContainerUser>
    </BlueContainer>
    <WhiteContainer>
      <ContainerBotao>
        <BotaoProxAula>
            <TextoContinuar> Press F for Respect </TextoContinuar>
          </BotaoProxAula>

          <BotaoAulaUrgente>
            <TextoContinuar> Aula Urgente </TextoContinuar>
          </BotaoAulaUrgente>

          <BotaoMarcarAula>
            <TextoContinuar> Marcar Aula </TextoContinuar>
          </BotaoMarcarAula>
        </ContainerBotao>
    </WhiteContainer>
    <ContainerFiltro>
      <BlocoFiltro>
        <BotaoFiltro>
          <ImagemFiltro source={require("../../assets/icons/portugues.png")} />
          <TextoFiltro> Reforço Escolar </TextoFiltro>
        </BotaoFiltro>

        <BotaoFiltro>
          <ImagemFiltro source={require("../../assets/icons/matematica.png")} />
          <TextoFiltro> Idiomas </TextoFiltro>
        </BotaoFiltro>

        <BotaoFiltro>
          <ImagemFiltro source={require("../../assets/icons/historia.png")} />
          <TextoFiltro> Vestibular </TextoFiltro>
        </BotaoFiltro>
      </BlocoFiltro>
    </ContainerFiltro>
    </>);
};