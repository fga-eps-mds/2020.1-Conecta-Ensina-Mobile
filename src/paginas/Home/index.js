import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

// import { Container } from './styles';

export default function Home({navigation}){
  return(<View>
    <TouchableOpacity>
      <Text> Aula Urgente </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress = {() => navigation.navigate('Materias')}>
      <Text> Agendar Aula </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress = {() => navigation.navigate('Materias')}>
      <Text> Reforço Escolar </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress = {() => navigation.navigate('Materias')}>
      <Text> Idiomas </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress = {() => navigation.navigate('Materias')}>
      <Text> Vestibular </Text>
    </TouchableOpacity>
  </View>);
};

