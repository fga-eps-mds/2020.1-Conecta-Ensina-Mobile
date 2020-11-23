import React from 'react';
import CountDown from 'react-native-countdown-component';
import {theme} from '../../../Theme';
import {TimerButton} from './styles';

export default function Timer(duration) {
  return (
    <TimerButton>
      <CountDown
        until={60 * 60 * duration}
        size={10}
        onFinish={() => alert('Aula Finalizada')}
        digitStyle={{backgroundColor: theme.colors.fundoAzul}}
        digitTxtStyle={{color: theme.colors.branco}}
        timeToShow={['H', 'M', 'S']}
      />
    </TimerButton>
  );
}
