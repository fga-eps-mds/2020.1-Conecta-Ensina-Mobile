import React, {useState, useContext} from 'react';
import {Container} from './styles';
import Theme, {theme} from '../../../Theme';
import ContinueContainer from '../../components/ContinueContainer';
import Background1 from '../../components/Background1';
import {ClassroomContext} from '../../contexts/classroom';
import Calendars from '../../components/Calendar';

export default function ConfirmedClass({navigation}) {
  const {getClassroom} = useContext(ClassroomContext);

  const [newDate, setNewDate] = useState(new Date());
  const [type, setType] = useState('Online');
  const [duration, setDuration] = useState(null);
  const [horario, setHorario] = useState('');
  const [selected, setSelected] = useState(null);

  const onChange = (day) => {
    let dateInc = day.dateString.split('-');
    let horarioInc = horario.split(':');
    setSelected(day.dateString);
    setNewDate(new Date(dateInc[0], dateInc[1], dateInc[2], horarioInc[0] - 2));
  };

  return (
    <Theme>
      <Background1 navigation={navigation} page={'TeacherProfile2'}>
        <Container>
          <Calendars
            onDayPress={onChange}
            markedDates={{
              [selected]: {
                selected: true,
                selectedColor: theme.colors.azulClaro,
              },
            }}
          />
        </Container>
        <ContinueContainer
          testID="ContinueContainer"
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
