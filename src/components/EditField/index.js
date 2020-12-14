import React from 'react';
import {TextContainer} from './styles';
import RegField from '../RegField';

import CustomText from '../CustomText';

export default function EditField(props) {
  return (
    <>
      <CustomText black medium>
        {props.field}
      </CustomText>
      <TextContainer>
        <RegField
          placeholder={
            props.placeholder
              ? props.placeholder
              : props.value
              ? props.value
              : 'Não informado'
          }
          value={props.value}
          onChangeText={props.onChangeText}
        />
      </TextContainer>
      {props.errors && (
        <CustomText black small>
          {props.errors}
        </CustomText>
      )}
    </>
  );
}
