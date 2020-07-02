import { StyleSheet, View,Image, Alert,TouchableWithoutFeedback } from 'react-native'
import React, { Component, useState, useEffect } from 'react';
import { Text, IconButton, TextInput, FAB } from 'react-native-paper'
import Header from '../component/Header'
import {styles} from './../stylesheet/global';
import {StackActions} from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle } from 'react-native-maps';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Map({ navigation }) {

  const [coordinates, setCoordinates] = useState([
    {descr: '1', latitude: 41.6946, longitude: -8.83016, nome: 'ponto1'},
    {descr: '2', latitude: 41.6946, longitude: -8.84017, nome: 'ponto2'},
    {descr: '3', latitude: 41.6700, longitude: -8.82000, nome: 'ponto3'},
    ]);

function callOut(){
  navigation.navigate('EditPonto')
}
  return (
    
    <View style={styles.containerMap}>
        <MapView
          provider={PROVIDER_GOOGLE} 
          style={styles.map}
          region={{
            latitude: 41.6946,
            longitude: -8.83016,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
          
        >
        
       
        {
          coordinates.map(marker => (
            <Marker
              key={marker.descr}
              coordinate={{latitude: marker.latitude,
               longitude: marker.longitude}}
              title={'Marker'}>
                  <Callout onPress={callOut}>
                    <Image source={require('../images/map.png')}
                      style={{width: 100, height: 100}}
                    
                    />
                    <Text>{marker.nome}</Text>
                  </Callout>
            </Marker>
            ))
        }
        </MapView>
        </View>
  
  
  );
  
}
export default Map;