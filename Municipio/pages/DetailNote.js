import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Platform, View, Button, Image, Text, TextInput, TouchableOpacity, Alert, YellowBox, ListView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Realm from 'realm';
let realm ;

function DetailNote({ route, navigation }) {
  const { id, noteTitle, noteDescription } = route.params;

  function updateData(){
    navigation.navigate('Update', {
         id: id,
         noteTitle: noteTitle,
         noteDescription: noteDescription,
       });
  }

  function deleteData(){
    Alert.alert(
      'Info',
      'Tem a certeza que pretende remover este registo?',
    [
      {text: 'Não', onPress: () => console.log('Pedido cancelado'), style: 'cancel'},
      {text: 'Sim', onPress: () => {deleteUser();}},
    ]
    );
  }

  function deleteUser(){
    realm = new Realm({ path: 'Notes.realm' });
    realm.write(() => {
      let task = realm.objects('Note').filtered('id = ' + id);
      realm.delete(task);
    });
    navigation.goBack();
  }

  return (
    <View style={styles.MainContainer}>
      <View style={styles.MainContainer}>
          <Text style = { styles.TextInputStyle }>Note Title: {noteTitle}</Text>
          <Text style = { styles.TextInputStyle }>Note Description: {noteDescription}</Text>
      </View>
      <View style={styles.secondcontainer}>
          <TouchableOpacity onPress={updateData} style={styles.button} >
             <Text> Update record </Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={deleteData} style={styles.button} >
              <Text> Delete record </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

 const styles = StyleSheet.create({
   MainContainer: {
       backgroundColor: '#242424',
     flex: 1,
   },
   secondcontainer: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center'
   },
   TextInputStyle:
   {
     borderWidth: 1,
     marginTop: 100,
     padding: 10,
     margin: 10,
     borderColor: '#003f5c',
     height: 40,
     borderRadius: 10,
     marginBottom: 10,
     color:"white",
     textAlign: 'center',
   },
   button: {
     alignItems: "center",
     backgroundColor: "#003f5c",
     padding: 10,
     borderRadius: 10,
     margin: 10,
     height: 40
   },
   TextInputStyles:{
       color: "white",
   }
 });


 export default DetailNote;