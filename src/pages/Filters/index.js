/* eslint-disable no-unused-vars */
import React, {useState, useContext, useEffect} from 'react';
import {Alert} from 'react-native';
import Theme, {theme} from '../../../Theme';
import {FiltersContext} from '../../contexts/filters';
import Background1 from '../../components/Background1';
import ContinueContainer from '../../components/ContinueContainer';
import GeneralPicker from '../../components/GeneralPicker';
import DatePicker from '../../components/DatePicker';
import SwitchFilter from '../../components/SwitchFilter';
import {
  ScrollContainer,
  CalendarsContainer,
  Container,
  ContainerFiltros,
  PickerContainer,
  ButtonContainer,
} from './styles';
import Calendars from '../../components/Calendar';
import {Calendar} from 'react-native-calendars';

export default function Filters({navigation, route}) {
  const [type, setType] = useState('Online');
  const [duration, setDuration] = useState(null);
  const [horario, setHorario] = useState('');
  const [selected, setSelected] = useState(null);
  const [newDate, setNewDate] = useState(new Date());

  const {setFilters} = useContext(FiltersContext);

  useEffect(() => {
    setFilters(type, newDate, duration, route.params.selectedId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, duration, newDate, horario]);

  const onChange = (day) => {
    let dateInc = day.dateString.split('-');
    let horarioInc = horario.split(':');
    setSelected(day.dateString);
    setNewDate(new Date(dateInc[0], dateInc[1], dateInc[2], horarioInc[0] - 2));
  };

  return (
    <Theme>
      <Background1 navigation={navigation} page={'Profile'}>
        <Container>
          <ScrollContainer>
            <ContainerFiltros>
              <CalendarsContainer>
                <Calendars
                  onDayPress={onChange}
                  markedDates={{
                    [selected]: {
                      selected: true,
                      selectedColor: theme.colors.azulClaro,
                    },
                  }}
                />
              </CalendarsContainer>
              <PickerContainer>
                <SwitchFilter onChange={setType} />
                <GeneralPicker duration onChange={setDuration} />
              </PickerContainer>
            </ContainerFiltros>
            <GeneralPicker time onChange={setHorario} />
          </ScrollContainer>
        </Container>
        <ButtonContainer>
          <ContinueContainer
            onPress={() => {
              if (selected === null || duration === null || horario === '') {
                Alert.alert('Você deve preencher todos os campos');
              } else {
                navigation.navigate('Teachers');
              }
            }}
            marginTop={{value: '0%'}}
          />
        </ButtonContainer>
      </Background1>
    </Theme>
  );
}
