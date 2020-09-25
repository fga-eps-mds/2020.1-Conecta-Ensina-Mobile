import React, {useState} from 'react';

import {ContainerCinza,ContainerAzul, Imagem, Nome} from './styles';

export default function SquareButton({data}) {
  const [click,setClick]= useState(data.clicked);
  if(click === false){
    return (
      <ContainerCinza onPress={() => {setClick(true)}}>
        <Imagem source={data.img} />
        <Nome>{data.nome}</Nome>
      </ContainerCinza>
    );
  }
  else{
    return(
      <ContainerAzul onPress={() => {setClick(false)}}>
      <Imagem source={data.img} />
      <Nome>{data.nome}</Nome>
    </ContainerAzul>
    );
  }
}
