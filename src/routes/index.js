import React, {useContext} from 'react';
import AlunoRoutes from './aluno.routes';
import ProfRoutes from './prof.routes';
import AuthRoutes from './auth.routes';
<<<<<<< HEAD
import AdmRoutes from './adm.routes';
=======
>>>>>>> 2e5b79381e511676b1eacc73f6c6f9b5bf94b2d7
import {AuthContext} from '../contexts/auth';

function Routes() {
  const {typeUser} = useContext(AuthContext);

<<<<<<< HEAD
  if (typeUser === 'Professor') {
    return <ProfRoutes />;
  } else if (typeUser === 'Aluno') {
    return <AlunoRoutes />;
  } else if (typeUser === 'Adm') {
    return <AdmRoutes />;
=======
  if (typeUser == 'Professor') {
    return <ProfRoutes />;
  } else if (typeUser == 'Aluno') {
    return <AlunoRoutes />;
>>>>>>> 2e5b79381e511676b1eacc73f6c6f9b5bf94b2d7
  } else {
    return <AuthRoutes />;
  }
}

export default Routes;
