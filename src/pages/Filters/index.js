import React, {useState, useContext, useEffect} from 'react';
import Theme, {theme} from '../../../Theme';
import {FiltersContext} from '../../contexts/filters'
import Background1 from '../../components/Background1';
import ContinueContainer from '../../components/ContinueContainer';
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

  const {setDtClass, setDurationFilters, setClassType} = useContext(FiltersContext);

  useEffect (() => {
    setClassType(type);
  },[type])

  useEffect (() => {
    setDurationFilters(parseInt(duration));

    console.log(duration);
  },[duration])

  useEffect (() => {
    setDtClass(newDate);
  },[newDate])


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
      <Background1 navigation={navigation} page={'Profile'}>
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
        <ContinueContainer
          onPress={() => {navigation.navigate('Teachers')}}
          marginTop={{value: '129%'}}
        />
      </Background1>
    </Theme>
  );
}
