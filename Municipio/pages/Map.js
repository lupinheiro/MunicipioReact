import { StyleSheet, View,Image, Alert,TouchableWithoutFeedback } from 'react-native'
import React, { Component, useState, useEffect } from 'react';
import { Text, IconButton, TextInput, FAB } from 'react-native-paper'
import Header from '../component/Header'
import {styles} from './../stylesheet/global';

import MapView, { PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
let markersURL = 'http://192.168.64.2/myslim/api/pontos';

/*import {StackActions} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
*/
function Map({route, navigation }) {
  const user = route.params;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(markersURL)
      .then(response => response.json())
      .then(responseJson => {
        setLoading(false), setData(responseJson.pontos);
      })
      .catch(error => console.error(error));
  },[] );

  const [initialPosition, setInitialPosition] = useState({
            latitude: 41.6946,
            longitude: -8.83016,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
  });

  const handleSuccess = position => {
    var lat = parseFloat(position.coords.latitude);
    var long = parseFloat(position.coords.longitude);

    var initialRegion = {
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
    };
    setInitialPosition(initialRegion);
  };

  const handleError = error => {
    setError(error.message);
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  //WATCH
  useEffect(() => {
    const watchId = Geolocation.watchPosition(handleSuccess, handleError);
    return () => Geolocation.clearWatch(watchId);
  }, []);

function Edit(marker) {
  if (user.user.id == marker.id_user) {
    navigation.navigate('EditPonto', {
      user: user,
      marker: marker,
    });
  }
}
  return (
    
    <View style={styles.containerMap}>
        <MapView
          provider={PROVIDER_GOOGLE} 
          style={styles.map}
          showsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={initialPosition}
        pitchEnabled={true}
        showsCompass={true}
        zoomEnabled={true}
        onLongPress={event =>
          navigation.navigate('Adiciona', {
            user: user,
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude,
          })
        }>
          {data.map(marker => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: parseFloat(marker.lat),
              longitude: parseFloat(marker.lng),
            }}>
            <Callout onPress={() => Edit(marker)}>
            <Image source={require('../images/map.png')}
            style={{width: 100, height: 100}}/>
              <Text style={{fontWeight: 'bold'}}>{marker.nome}</Text>
              <Text>Latitude: {marker.lat}</Text>
              <Text>Longitude: {marker.lng}</Text>
              <Text>Descrição: {marker.descr}</Text>
              <Text>idPonto: {marker.id}</Text>
              <Text>idUtilizador: {marker.id_user}</Text>

            </Callout>
          </Marker>
        ))}
        </MapView>
        </View>
  
  
  );
  
}
export default Map;