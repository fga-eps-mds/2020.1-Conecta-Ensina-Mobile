import React, {useState, useContext, useEffect} from 'react';
import Theme, {theme} from '../../../Theme';
import {ClassroomContext} from '../../contexts/classroom';
import Background1 from '../../components/Background1';
import {
  ContainerVisualAula,
  ListaVisualAula,
  ContainerButtons,
  ContainerTexto,
  ButtonVerMais,
} from './styles';
import CustomText from '../../components/CustomText';

export default function CompletedClass({navigation}) {
  const {statusClasses, loadStatusClasses} = useContext(ClassroomContext);

  useEffect(() => {
    if (statusClasses !== {}) {
      loadStatusClasses(4);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //console.log(loadStatusClasses(4));

  /*  const renderItem = ({item}) => {
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
*/
  return (
    <Theme>
      <Background1 navigation={navigation} page={'TeacherProfile2'}>
        <ListaVisualAula
          numColumns={2}
          data={statusClasses}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (<ContainerVisualAula>
              <CustomText>
                {item.cep}
              </CustomText>
            </ContainerVisualAula>);
          }}
        />
      </Background1>
    </Theme>
  );
}
