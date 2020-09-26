import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Container} from './styles';
import {withTheme} from 'styled-components';

function DatePicker({theme, date, onClose, onChange}) {
  const [dateNow, setDateNow] = useState(new Date(date));

  return (
    <Container>
      <DateTimePicker
        value={dateNow}
        mode="date"
        display="default"
        onChange={(e, d) => {
          const currentDate = d || dateNow;
          setDateNow(currentDate);
          onChange(currentDate);
        }}
        style={{backgroundColor: theme.colors.fundoAzul}}
      />
    </Container>
  );
}

export default withTheme(DatePicker);
