import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { BotaoMateria, TextoMateria, BlocoMaterias, BotaoContinuar, TextoContinuar } from './styles';
import { BlueContainer, WhiteContainer, ImagemMateria, ContainerMaterias, ContainerUser } from './styles';

export default function Materias(){
  return(
    <>
    <BlueContainer>
      <ContainerUser>
        <ImagemMateria source={require("../../assets/icons/user.png")} />
      </ContainerUser>
    </BlueContainer>
    <WhiteContainer>
    </WhiteContainer>
    <ContainerMaterias>
    <BlocoMaterias>
      <BotaoMateria>
        <ImagemMateria source={require("../../assets/icons/portugues.png")} />
        <TextoMateria> Português </TextoMateria>
      </BotaoMateria>

      <BotaoMateria>
        <ImagemMateria source={require("../../assets/icons/matematica.png")} />
        <TextoMateria> Matemática </TextoMateria>
      </BotaoMateria>

      <BotaoMateria>
        <ImagemMateria source={require("../../assets/icons/historia.png")} />
        <TextoMateria> História </TextoMateria>
      </BotaoMateria>
    </BlocoMaterias>
    
    <BlocoMaterias>
      <BotaoMateria>
        <ImagemMateria source={require("../../assets/icons/geografia.png")} />
        <TextoMateria> Geografia </TextoMateria>
      </BotaoMateria>

      <BotaoMateria>
        <ImagemMateria source={require("../../assets/icons/ciencia.png")} />
        <TextoMateria> Ciência </TextoMateria>
      </BotaoMateria>

      <BotaoMateria>
        <ImagemMateria source={require("../../assets/icons/quimica.png")} />
        <TextoMateria> Química </TextoMateria>
      </BotaoMateria>
    </BlocoMaterias>

    <BlocoMaterias>
      <BotaoMateria>
        <ImagemMateria source={require("../../assets/icons/fisica.png")} />
        <TextoMateria> Física </TextoMateria>
      </BotaoMateria>

      <BotaoMateria>
        <ImagemMateria source={require("../../assets/icons/biologia.png")} />
        <TextoMateria> Biologia </TextoMateria>
      </BotaoMateria>

      <BotaoMateria>
        <ImagemMateria source={require("../../assets/icons/redacao.png")} />
        <TextoMateria> Redação </TextoMateria>
      </BotaoMateria>
    </BlocoMaterias>

    <BlocoMaterias>
      <BotaoMateria>
        <ImagemMateria source={require("../../assets/icons/artes.png")} />
        <TextoMateria> Artes </TextoMateria>
      </BotaoMateria>

      <BotaoMateria>
        <ImagemMateria source={require("../../assets/icons/ingles.png")} />
        <TextoMateria> Inglês </TextoMateria>
      </BotaoMateria>

      <BotaoMateria>
        <ImagemMateria source={require("../../assets/icons/espanhol.png")} />
        <TextoMateria> Espanhol </TextoMateria>
      </BotaoMateria>
    </BlocoMaterias>

    <BotaoContinuar>
      <TextoContinuar> Continuar </TextoContinuar>
    </BotaoContinuar>
  </ContainerMaterias>
  </>
  );
};

