import React, {useState} from 'react';
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

export default function CompletedClass({navigation}) {
  const [aulas, setAulas] = useState([
    {id: '15', nome: 'ExemploAula01'},
    {id: '25', nome: 'ExemploAula02'},
    {id: '35', nome: 'ExemploAula03'},
    {id: '45', nome: 'ExemploAula04'},
  ]);

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
          data={aulas}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </Background1>
    </Theme>
  );
}
