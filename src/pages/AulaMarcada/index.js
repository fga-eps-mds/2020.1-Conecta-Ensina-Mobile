import React, {useState} from 'react';
import {DataButton, Container, Texto} from './styles';
import DatePicker from '../../components/DatePicker';
import Theme from '../../../Theme';
import Background1 from '../../components/Background1';

export default function AulaMarcada({navigation}) {
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
      <Background1 navigation={navigation} page={'PerfilProf2'}>
        <Container>
          <DataButton onPress={handlerShowPicker}>
            <Texto>Data</Texto>
          </DataButton>

          {show && <DatePicker date={newDate} onChange={onChange} />}
        </Container>
      </Background1>
    </Theme>
  );
}
