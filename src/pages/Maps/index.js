import React, {useContext, useState, useEffect} from 'react';
import Theme from '../../../Theme';
import Background1 from '../../components/Background1';
import MapView from 'react-native-maps';
import {ClassroomContext} from '../../contexts/classroom';
export default function Maps({navigation}) {
  const {coordenates} = useContext(ClassroomContext);

  return (
    <Theme>
      <Background1>
        {coordenates && coordenates.lat && coordenates.lng && (
          <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: coordenates.lat,
              longitude: coordenates.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <MapView.Marker
              coordinate={{
                latitude: coordenates.lat,
                longitude: coordenates.lng,
              }}
              title={'Local de aula'}
              description={'Local onde ocorrerá a aula'}
            />
          </MapView>
        )}
      </Background1>
    </Theme>
  );
}
