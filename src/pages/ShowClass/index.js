import React, {useState, useContext} from 'react';
import Theme from '../../../Theme';
import Background1 from '../../components/Background1';
import {
  ContainerVisualAula,
  ListaVisualAula,
  ContainerButtons,
  ContainerTexto,
  ButtonVerMais,
} from './styles';
import CustomText from '../../components/CustomText';
import {ClassroomContext} from '../../contexts/classroom';

export default function CompletedClass({navigation}) {
  const {classroom} = useContext(ClassroomContext);

  const renderItem = ({item}) => {
    return (
      <ContainerVisualAula>
        <ContainerTexto>
          <CustomText smaller black>
            Horario: 16 - 17h
          </CustomText>
          <CustomText smaller black>
            Conteudo
          </CustomText>
          <CustomText smaller black>
            Modalidade
          </CustomText>
          <CustomText smaller black>
            Distancia
          </CustomText>
          <CustomText smaller black>
            {' '}
          </CustomText>
          <CustomText smaller black>
            Dados do Aluno
          </CustomText>
          <CustomText smaller black>
            {' '}
            - Nome
          </CustomText>
          <CustomText smaller black>
            {' '}
            - Serie
          </CustomText>
          <CustomText smaller black>
            {' '}
            - Endereço
          </CustomText>
          <CustomText smaller black>
            {' '}
            - Observação
          </CustomText>
        </ContainerTexto>
        <ContainerButtons>
          <ButtonVerMais>
            <CustomText smaller white>
              Ver mais
            </CustomText>
          </ButtonVerMais>
        </ContainerButtons>
      </ContainerVisualAula>
    );
  };

  return (
    <Theme>
      <Background1 navigation={navigation} page={'TeacherProfile2'}>
        <ListaVisualAula
          numColumns={2}
          data={classroom}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </Background1>
    </Theme>
  );
}
