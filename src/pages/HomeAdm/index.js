import React, {useState, useContext} from 'react';
import Theme, {theme} from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import Background4 from '../../components/Background4';
import {AuthContext} from '../../contexts/auth';
import {AdmContext} from '../../contexts/admin';
import {ListFuncoes, SignOut, ContainerButton} from './styles';
import CustomText from '../../components/CustomText';

export default function HomeAdm({navigation}) {
  const [funcoes, setFuncoes] = useState([
    {
      id: '101',
      name: 'Professores Pendentes',
      img: require('../../assets/books.png'),
    },
    {
      id: '171',
      name: 'Usuários Reportados',
      img: require('../../assets/books.png'),
    },
  ]);
  const {signOut} = useContext(AuthContext);
  const {
    getProfessorList,
    getReportedUsers,
    getProfessoUser,
    students,
  } = useContext(AdmContext);

  return (
    <Theme>
      <Background4>
        <ListFuncoes
          horizontal
          data={funcoes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            async function handleProf() {
              var nextScreen;

              if (item.id === '101') {
                nextScreen = 'PendingTeacher';
                await getProfessorList();
              } else if (item.id === '171') {
                nextScreen = 'ReportedUsers';
                await getReportedUsers();
                await getProfessoUser(students[0].id);
              } else {
                nextScreen = 'HomeAdm';
              }
              navigation.navigate(nextScreen);
            }

            return (
              <SquareButton
                data={item}
                onPress={handleProf}
                style={{backgroundColor: theme.colors.cinzaClaro}}
              />
            );
          }}
        />
        <ContainerButton>
          <SignOut testID="signout" onPress={() => signOut()}>
            <CustomText white bigSmall>
              Sair
            </CustomText>
          </SignOut>
        </ContainerButton>
      </Background4>
    </Theme>
  );
}
