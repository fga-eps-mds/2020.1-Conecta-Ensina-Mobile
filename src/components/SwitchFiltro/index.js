import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { Container } from './styles'

export default function SwitchFiltro({ onChange }) {
 const estiloOptions = [
     {label: 'Online', value: 'Online'},
     {label: 'Presencial', value: 'Presencial'}
 ]
    
 return (
   <Container>
       <SwitchSelector 
       options={estiloOptions}
       initial={0}
       onPress={value => onChange(value)}
       textColor="black"
       selectedColor="white"
       buttonColor="#E46270"
       borderRadius={3}
       buttonMargin={10}
       height={43}
       fontSize={16}
       />
   </Container>
  );
}