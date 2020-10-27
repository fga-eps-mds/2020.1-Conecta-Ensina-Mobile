import React, {useState} from 'react';
import Theme, {theme} from '../../../Theme';
import Background1 from '../../components/Background1';
import ButtonContinuar from '../../components/ButtonContinuar';
import DurationPicker from '../../components/DurationPicker';
import HorarioPicker from '../../components/HorarioPicker';
import DatePicker from '../../components/DatePicker';

import SwitchFiltro from '../../components/SwitchFiltro';
import {Container, ContainerFiltros, DataButton, Texto} from './styles';

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
<<<<<<< HEAD
        <ButtonContinuar onPress={() => navigation.navigate('Professores')} />
=======
        <ButtonContinuar onPress={() => navigation.navigate('Professores')}>
          Continuar
        </ButtonContinuar>
>>>>>>> 2e5b79381e511676b1eacc73f6c6f9b5bf94b2d7
      </Background1>
    </Theme>
  );
}
