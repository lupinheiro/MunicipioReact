/*Home Screen With buttons to navigate to diffrent options*/
import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Alert,
  } from 'react-native';

import { Text, IconButton, TextInput, FAB } from 'react-native-paper'
import {styles} from '../stylesheet/global';
import {StackActions} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../component/Header'
 

 function EditPonto({ route, navigation }) {
    const {user} = route.params;
    const {marker} = route.params;


const txt1 = 'http://192.168.64.2/myslim/api/apaga/';
const txt2 = marker.id;
const url_del = `${txt1}${txt2}`;

    function deletePonto() {
        Alert.alert('Alerta', 'Confirma que quer remover o ponto ?', [
          {
            text: 'Não',
            onPress: () => console.log('Pedido cancelado'),
            style: 'cancel',
          },
          {
            text: 'Sim',
            onPress: () => {
              confirmaDelete();
            },
          },
        ]);
      }
    
      function confirmaDelete() {
        const requestOptions = {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
        };
        fetch(url_del, requestOptions)
          .then(response => response.json())
          .then(data => {
            if (data.status) {
              navigation.dispatch(StackActions.popToTop());
            }
          })
          .catch(error => console.error(error));
      }

   return (
    <>
    <Header 
    titleText='Editar Ponto' />
    <IconButton
        icon="close"
        size={25}
        color='white'
        onPress={() => navigation.navigate('Map')}
        style={styles.iconButtonNotas}
    />

    <View style={styles.containerNotas}>
        <TextInput
            label="Nome"
            mode='outlined'
            onChangeText={text => setNoteTitle(text)}
            style={styles.titleNotas}
        />
        <TextInput
            label="Descrição"
            onChangeText = { text => setNoteDescription(text)} 
            mode="flat"
            multiline={true}
            style={styles.textNotas}
            scrollEnabled={true}
            returnKeyLabel='done'
            blurOnSubmit={true}
        />
        <FAB
            style={styles.fabNotas}
            small
            icon="check"
            onPress={() => navigation.navigate('Map')}
        />
         <FAB
            style={styles.fabNotas2}
            small
            icon="delete"
            onPress={deletePonto}
        />
    </View>
</>
   );
 }
export default EditPonto;
