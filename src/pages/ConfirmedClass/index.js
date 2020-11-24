import React, {useState, useContext} from 'react';
import {DataButton, Container, Texto} from './styles';
import DatePicker from '../../components/DatePicker';
import Theme from '../../../Theme';
import ContinueContainer from '../../components/ContinueContainer';
import Background1 from '../../components/Background1';
import {ClassroomContext} from '../../contexts/classroom';

export default function AulaMarcada({navigation}) {
  const {getClassroom} = useContext(ClassroomContext);

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
      <Background1 navigation={navigation} page={'TeacherProfile2'}>
        <Container>
          <DataButton testID="DataButton" onPress={handlerShowPicker}>
            <Texto>Data</Texto>
          </DataButton>
          {show && <DatePicker date={newDate} onChange={onChange} />}
        </Container>
        <ContinueContainer
          onPress={async () => {
            await getClassroom(1);
            navigation.navigate('ShowClass');
          }}
          marginTop={{value: '100%'}}
        />
      </Background1>
    </Theme>
  );
}
