import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import AlunoRoutes from './aluno.routes';
import ProfRoutes from './prof.routes';
import AuthRoutes from './auth.routes';
import AdmRoutes from './adm.routes';
import {AuthContext} from '../contexts/auth';

function Routes() {
  const {typeUser, signed, loading} = useContext(AuthContext);

  console.log(signed);
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    );
  }

  if (signed === true) {
    if (typeUser === 'Professor') {
      return <ProfRoutes />;
    } else if (typeUser === 'Aluno') {
      return <AlunoRoutes />;
    } else if (typeUser === 'Adm') {
      return <AdmRoutes />;
    }
  } else {
    return <AuthRoutes />;
  }
}

export default Routes;
