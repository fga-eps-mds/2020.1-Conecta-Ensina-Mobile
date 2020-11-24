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
import {AuthContext} from '../../contexts/auth';
import {StudentContext} from '../../contexts/student';

export default function CompletedClass({navigation}) {
  const {classroom} = useContext(ClassroomContext);
  const {getStudent2} = useContext(StudentContext);
  console.log('classe: ' + classroom);

  return (
    <Theme>
      <Background1 navigation={navigation} page={'TeacherProfile2'}>
        <ListaVisualAula
          numColumns={2}
          data={Object.values(classroom)}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <ContainerVisualAula>
                <ContainerTexto>
                  <CustomText smaller black>
                    Horario:
                    {'\n' + item.dtclass}
                  </CustomText>
                  <CustomText smaller black>
                    Conteudo:
                    {'\n' + item.subject}
                  </CustomText>
                  <CustomText smaller black>
                    Distancia:
                    {'\n' + item.cep}
                  </CustomText>
                </ContainerTexto>
                <ContainerButtons>
                  <ButtonVerMais
                    onPress={async () => {
                      await getStudent2(item.id);
                      navigation.navigate('ClassroomDetails', {item});
                    }}>
                    <CustomText smaller white>
                      Ver mais
                    </CustomText>
                  </ButtonVerMais>
                </ContainerButtons>
              </ContainerVisualAula>
            );
          }}
        />
      </Background1>
    </Theme>
  );
}
