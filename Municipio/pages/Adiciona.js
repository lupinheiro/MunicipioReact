import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {styles} from './../stylesheet/global';
import Header from '../component/Header'
import { Text, IconButton, TextInput, FAB } from 'react-native-paper'


function Adiciona({route, navigation}) {
  const {user} = route.params;
  const {lat} = route.params;
  const {lng} = route.params;
  const [descr, setDescr] = useState([]);
  const [nome, setNome] = useState([]);
  

  function addPonto() {
    if (nome) {
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          lat: lat,
          lng: lng,
          nome: nome,
          id_user: user.id,
          descr: descr,
        }),
      };
      fetch(
        'http://192.168.64.2/myslim/api/adiciona',
        requestOptions,
      )
        .then(response => response.json())
        .then(data => {
          if (data.status) {
            console.log(data);
            navigation.goBack();
          }
        })
        .catch(error => console.error(error));
    }
  }


   return (
    <>
    <Header 
    titleText='Adicionar Ponto' />
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
            onChangeText={text => setNome(text)}
            style={styles.titleNotas}
        />
        <TextInput
            label="Descrição"
            onChangeText = { text => setDescr(text)} 
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
            onPress={() => addPonto()}
        />
    </View>
    <View style={styles.loginText}>
      <Text>Latitude: {lat}</Text>
      <Text>Longitude: {lng}</Text>
    </View>
</>
   );
 }
export default Adiciona;
