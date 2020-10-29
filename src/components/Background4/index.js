import React from 'react';
import Theme from '../../../Theme';
import {BlueContainer, WhiteContainer, UserContainer} from './styles';

export default function Background1({children}) {
  return (
    <Theme>
      <BlueContainer>
        <UserContainer />
        <WhiteContainer>{children}</WhiteContainer>
      </BlueContainer>
    </Theme>
  );
}
