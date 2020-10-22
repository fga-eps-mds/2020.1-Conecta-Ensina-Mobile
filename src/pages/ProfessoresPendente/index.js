import React, {useState} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/ContainerTeacher';
import ContainerVoltar from '../../components/ContainerVoltar';
import {Button, Text} from 'react-native';

import CustomText from '../../components/CustomText';
import Background1 from '../../components/Background1';
import {ListMaterias, Container, ContainerFooter} from './styles';


export default function ProfessoresPendentes({route, navigation}) {

  const {teachers} = route.params;
  
  return (
    <Theme>
      <Background1>
        <Container>
          <ListMaterias
            numColumns={2}
            data={teachers}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>  
              <SquareButton 
                data={item} 
                onPressProf={() => navigation.navigate('HomeAdm')}
              />}
          />
        </Container>
        <ContainerFooter>
          <ContainerVoltar onPressVoltar={() => navigation.push('HomeAdm')} />
        </ContainerFooter>
      </Background1>
    </Theme>
  );
}