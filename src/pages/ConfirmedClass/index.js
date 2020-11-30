import React, {useState, useEffect} from 'react';
import {DataButton, Container, Texto} from './styles';
import DatePicker from '../../components/DatePicker';
import Theme, {theme} from '../../../Theme';
import Background1 from '../../components/Background1';
import Calendars from '../../components/Calendar';

export default function ConfirmedClass({navigation}) {
  const [newDate, setNewDate] = useState(new Date());
  const [type, setType] = useState('Online');
  const [duration, setDuration] = useState(null);
  const [horario, setHorario] = useState('');
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    
  }, [type, duration, newDate, horario]);

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
      </Background1>
    </Theme>
  );
}
