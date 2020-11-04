import React, {useState} from 'react';
import Theme from '../../../Theme';

import Background1 from '../../components/Background1';
import ContinuarContainer from '../../components/ContinuarContainer';
import DurationPicker from '../../components/DurationPicker';
import HorarioPicker from '../../components/HorarioPicker';
import DatePicker from '../../components/DatePicker';
import SwitchFiltro from '../../components/SwitchFiltro';
import {Container, ContainerFiltros, DataButton, Texto} from './styles';

export default function Filtros({navigation}) {
  const [, setType] = useState('');
  const [, setDuration] = useState('');
  const [, setHorario] = useState('');
  const [newDate, setNewDate] = useState(new Date());
  const [show, setShow] = useState(false);

  function handlerShowPicker() {
    setShow(true);
  }

  const onChange = (date) => {
    setNewDate(date);
    setShow(false);
  };

  return (
    <Theme>
      <Background1 navigation={navigation} page={'Perfil'}>
        <Container>
          <DataButton onPress={handlerShowPicker}>
            <Texto>Data</Texto>
          </DataButton>
          {show && <DatePicker date={newDate} onChange={onChange} />}
          <ContainerFiltros>
            <SwitchFiltro onChange={setType} />
            <DurationPicker onChange={setDuration} />
          </ContainerFiltros>
          <HorarioPicker onChange={setHorario} />
        </Container>
        <ContinuarContainer
          onPress={() => navigation.navigate('Professores')}
          marginTop={{value: '100%'}}>
          Continuar
        </ContinuarContainer>
      </Background1>
    </Theme>
  );
}
