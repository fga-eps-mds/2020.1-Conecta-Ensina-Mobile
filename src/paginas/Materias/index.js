import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Container, BotaoMateria, TextoMateria, BlocoMaterias, BotaoContinuar, TextoContinuar, ImagemMateria } from './styles';

export default function Materias(){
  return(
    <Container>
      <BlocoMaterias>
        <BotaoMateria>
          <ImagemMateria source={require("../../assets/icons/fisica.png")} />
          <TextoMateria> Português </TextoMateria>
        </BotaoMateria>

        <BotaoMateria>
          <ImagemMateria source={require("../../assets/icons/fisica.png")} />
          <TextoMateria> Matemática </TextoMateria>
        </BotaoMateria>

        <BotaoMateria>
          <ImagemMateria source={require("../../assets/icons/fisica.png")} />
          <TextoMateria> História </TextoMateria>
        </BotaoMateria>
      </BlocoMaterias>
      
      <BlocoMaterias>
        <BotaoMateria>
          <ImagemMateria source={require("../../assets/icons/fisica.png")} />
          <TextoMateria> Geografia </TextoMateria>
        </BotaoMateria>

        <BotaoMateria>
          <ImagemMateria source={require("../../assets/icons/fisica.png")} />
          <TextoMateria> Ciência </TextoMateria>
        </BotaoMateria>

        <BotaoMateria>
          <ImagemMateria source={require("../../assets/icons/fisica.png")} />
          <TextoMateria> Química </TextoMateria>
        </BotaoMateria>
      </BlocoMaterias>

      <BlocoMaterias>
        <BotaoMateria>
          <ImagemMateria source={require("../../assets/icons/fisica.png")} />
          <TextoMateria> Física </TextoMateria>
        </BotaoMateria>

        <BotaoMateria>
          <ImagemMateria source={require("../../assets/icons/fisica.png")} />
          <TextoMateria> Biologia </TextoMateria>
        </BotaoMateria>

        <BotaoMateria>
          <ImagemMateria source={require("../../assets/icons/fisica.png")} />
          <TextoMateria> Redação </TextoMateria>
        </BotaoMateria>
      </BlocoMaterias>

      <BlocoMaterias>
        <BotaoMateria>
          <ImagemMateria source={require("../../assets/icons/fisica.png")} />
          <TextoMateria> Artes </TextoMateria>
        </BotaoMateria>

        <BotaoMateria>
          <ImagemMateria source={require("../../assets/icons/fisica.png")} />
          <TextoMateria> Inglês </TextoMateria>
        </BotaoMateria>

        <BotaoMateria>
          <ImagemMateria source={require("../../assets/icons/fisica.png")} />
          <TextoMateria> Espanhol </TextoMateria>
        </BotaoMateria>
      </BlocoMaterias>

      <BotaoContinuar>
        <TextoContinuar> Continuar </TextoContinuar>
      </BotaoContinuar>
    </Container>
  );
};

