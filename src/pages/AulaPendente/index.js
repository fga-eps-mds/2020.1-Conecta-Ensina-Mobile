import React, { useState } from 'react'
import Theme, {theme} from '../../../Theme';
import Background1 from '../../components/Background1';
import {ContainerVisualAula, ListaVisualAula,
        ContainerButtons, ContainerTexto,
        ButtonConfirmar, ButtonRecusar} from './styles'
import {Text} from 'react-native'

const Item = ({item, onPress, style}) => (
    <ContainerVisualAula/>
  );

export default function AulaPendente(){

    const [filtros,setFiltros] = useState([
        {id: '1', nome: 'Reforço Escolar', img: require('../../assets/books.png')},
        {id: '2', nome: 'Idiomas', img: require('../../assets/books.png')},
        {id: '3', nome: 'Vestibular', img: require('../../assets/books.png')},
      ]);

    const renderItem = ({item}) => {
        
        return (
            <ContainerVisualAula>
                <ContainerTexto>
                </ContainerTexto>
                <ContainerButtons>
                    <ButtonRecusar>
                    </ButtonRecusar>
                    <ButtonConfirmar>
                    </ButtonConfirmar>
                </ContainerButtons>
            </ContainerVisualAula>
        );
    };

    return(
        <Theme>
            <Background1>
                <ListaVisualAula
                    numColumns={2}
                    data={filtros}
                    keyExtractor={(item)=>item.key}
                    renderItem={renderItem}
                />
            </Background1>
        </Theme>
    );
}
