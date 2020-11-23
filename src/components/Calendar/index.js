import React from 'react';
import {Container} from './styles';
import {Calendar} from 'react-native-calendars';

export default function Calendars({onDayPress, markedDates}) {
  return (
    <Container>
      <Calendar onDayPress={onDayPress} markedDates={markedDates} />
    </Container>
  );
}
