import React, {useState} from 'react';
import Theme from '../../../Theme';
import Background1 from '../../components/Background1';
import ButtonContinuar from '../../components/ButtonContinuar';
import DurationPicker from '../../components/DurationPicker';
import HorarioPicker from '../../components/HorarioPicker';
import DatePicker from '../../components/DatePicker'; 

import SwitchFiltro from '../../components/SwitchFiltro';
import {ListMaterias, Container, ContainerFiltros, DataButton, Texto} from './styles';

export default function Filtros() {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [horario, setHorario] = useState('');
  const [newDate, setNewDate] = useState(new Date())
  const [show, setShow] = useState(false)
  
  function handlerShowPicker(){
   setShow(true)
  }
 
  function handleClose(){
    setShow(false)
  }
 
  const onChange = (date)=>{
     setNewDate(date)
     console.log(date)
  }

  return (
    <Theme>
      <Background1>
        <Container>
          <DataButton onPress={handlerShowPicker}>
            <Texto>Data</Texto>
          </DataButton>
          {show && (
            <DatePicker
            onClose={handleClose}
            date={newDate}
            onChange={onChange}
            />
          )}
          <ContainerFiltros>
            <SwitchFiltro onChange={setType} />
            <DurationPicker onChange={setDuration} />
          </ContainerFiltros>
          <HorarioPicker onChange={setHorario} />
        </Container>
        <ButtonContinuar />
      </Background1>
    </Theme>
  );
}
