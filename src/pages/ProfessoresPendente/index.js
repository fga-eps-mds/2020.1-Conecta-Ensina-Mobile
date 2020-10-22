import React, {useState} from 'react';
import Theme from '../../../Theme';
import SquareButton from '../../components/ContainerTeacher';
import ContainerVoltar from '../../components/ContainerVoltar';
import {Button, Text} from 'react-native';

import CustomText from '../../components/CustomText';
import Background4 from '../../components/Background4';
import {ListMaterias, Container, ContainerFooter} from './styles';


export default function ProfessoresPendentes({route, navigation}) {

  const {teachers} = route.params;
  
  return (
    <Theme>
      <Background4>
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
      </Background4>
    </Theme>
  );
}