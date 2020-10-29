import React, {useState} from 'react';
import Theme, {theme} from '../../../Theme';

import Background1 from '../../components/Background1';
import ContinuarContainer from '../../components/ContinuarContainer';
import DurationPicker from '../../components/DurationPicker';
import HorarioPicker from '../../components/HorarioPicker';
import DatePicker from '../../components/DatePicker';
import SwitchFiltro from '../../components/SwitchFiltro';

import {
  ListMaterias,
  Container,
  ContainerFiltros,
  DataButton,
  Texto,
  ButtonContainer,
} from './styles';

export default function Filtros({navigation}) {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [horario, setHorario] = useState('');
  const [newDate, setNewDate] = useState(new Date());
  const [show, setShow] = useState(false);

  function handlerShowPicker() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  const onChange = (date) => {
    setNewDate(date);
    setShow(false);
  };

  return (
    <Theme>
      <Background1>
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
          marginTop={{value: '129%'}}>
          Continuar
        </ContinuarContainer>
      </Background1>
    </Theme>
  );
}
