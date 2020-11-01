import React, {useContext} from 'react';
import AlunoRoutes from './aluno.routes';
import ProfRoutes from './prof.routes';
import AuthRoutes from './auth.routes';
import AdmRoutes from './adm.routes';
import {AuthContext} from '../contexts/auth';

function Routes() {
  const {typeUser, signed} = useContext(AuthContext);
  console.log(signed);
  
  if(signed === true){
    if (typeUser === 'Professor') {
      return <ProfRoutes />;
    } else if (typeUser === 'Aluno') {
      return <AlunoRoutes />;
    } else if (typeUser === 'Adm') {
      return <AdmRoutes />;
    }
  }
  else {
    return <AuthRoutes />;
  }

}

export default Routes;
