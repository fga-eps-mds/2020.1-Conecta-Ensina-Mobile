import React, {useState} from 'react';
import Theme, {theme} from '../../../Theme';

import Background1 from '../../components/Background1';
import ContinuarContainer from '../../components/ContinuarContainer';
import GeneralPicker from '../../components/GeneralPicker';
import DatePicker from '../../components/DatePicker';
import SwitchFilter from '../../components/SwitchFilter';
import {Container, ContainerFiltros, DataButton, Texto} from './styles';

export default function Filters({navigation}) {
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
      <Background1 navigation={navigation} page={'Profiles'}>
        <Container>
          <DataButton onPress={handlerShowPicker}>
            <Texto>Data</Texto>
          </DataButton>
          {show && <DatePicker date={newDate} onChange={onChange} />}
          <ContainerFiltros>
            <SwitchFilter onChange={setType} />
            <GeneralPicker duration onChange={setDuration} />
          </ContainerFiltros>
          <GeneralPicker time onChange={setHorario} />
        </Container>
        <ContinuarContainer
          onPress={() => navigation.navigate('Teachers')}
          marginTop={{value: '129%'}}
        />
      </Background1>
    </Theme>
  );
}
