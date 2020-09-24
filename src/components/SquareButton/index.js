import React from 'react';
import { Container,Imagem, Nome} from './styles'
import { useNavigation } from '@react-navigation/native'

export default function SquareButton({ data }) {

const navigation = useNavigation();

 return (
   <Container onPress = {() => navigation.navigate(data.path)}>
       <Imagem source={data.img} />
       <Nome>{data.nome}</Nome>
   </Container>
  );
}
