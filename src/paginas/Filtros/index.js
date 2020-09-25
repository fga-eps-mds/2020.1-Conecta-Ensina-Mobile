import React, {useState} from 'react';
import Theme from '../../../Theme';
import Background1 from '../../components/Background1';
import ButtonContinuar from '../../components/ButtonContinuar';
import DurationPicker from '../../components/DurationPicker';
import HorarioPicker from '../../components/HorarioPicker';

import SwitchFiltro from '../../components/SwitchFiltro';
import {ListMaterias, Container, ContainerFiltros} from './styles';

export default function Filtros() {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [horario, setHorario] = useState('');

  return (
    <Theme>
      <Background1>
        <Container>
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
