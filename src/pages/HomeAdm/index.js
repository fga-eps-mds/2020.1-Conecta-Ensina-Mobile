import React, {useEffect, useState, useContext} from 'react';
import Theme, {theme} from '../../../Theme';
import SquareButton from '../../components/SquareButton';
import Background4 from '../../components/Background4';
import {AuthContext} from '../../contexts/auth';
import {AdmContext} from '../../contexts/admin';
import {ListFuncoes, SignOut, ContainerButton} from './styles';
import CustomText from '../../components/CustomText';

export default function HomeAdm({navigation}) {
  const [id, setId] = useState(null);
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
    pendingUsers,
    reportedUsers,
    getTeacherList,
    getReportedUsers,
    getProfessoUser,
  } = useContext(AdmContext);

  async function handlePending() {
    await getTeacherList();
    await getProfessoUser(pendingUsers[0].id);
    navigation.navigate('PendingTeacher');
  }

  async function handleReported() {
    await getReportedUsers();
    await getProfessoUser(reportedUsers[0].id);
    navigation.navigate('ReportedUsers');
  }

  return (
    <Theme>
      <Background4>
        <ListFuncoes
          horizontal
          data={funcoes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <SquareButton
              data={item}
              onPress={async () => {
                if (item.id === '101') {
                  await handlePending();
                } else if (item.id === '171') {
                  await handleReported();
                }
              }}
              style={{backgroundColor: theme.colors.cinzaClaro}}
            />
          )}
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
