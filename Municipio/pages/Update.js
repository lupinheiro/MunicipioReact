import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Platform, View, Button, Image, Text, TextInput, TouchableOpacity, Alert, YellowBox, ListView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from '@react-navigation/native';
import {styles} from './../stylesheet/global';

import Realm from 'realm';
let realm ;

function Update({ route, navigation }) {
  const { id, noteTitle, noteDescription } = route.params;

  const [noteTitle1, setNoteTitle1] = useState(noteTitle);
  const [noteDescription1, setNoteDescription1] = useState(noteDescription);


  function update(){
    if (noteTitle1 && noteDescription1) {
      realm = new Realm({ path: 'Notes.realm' });

      realm.write(() => {
        var obj = realm
          .objects('Note')
          .filtered('id =' + id);
        if (obj.length > 0) {
          obj[0].noteTitle = noteTitle1
          obj[0].noteDescription = noteDescription1
          Alert.alert(
            'Info',
            'Registo atualizado com sucesso',
            [
              {
                text: 'Ok',
                onPress: () =>
                  navigation.dispatch(StackActions.popToTop())
              },
            ],
            { cancelable: false }
          );
        } else {
          alert('Atualização falhou');
        }
      });
    }
  }

  return (
    <View style={styles.MainContainerDetailP}>
      <TextInput
            placeholder="Insert Note Title"
            style = { styles.TextInputStyleDetail }
            underlineColorAndroid = "transparent"
            onChangeText={text => setNoteTitle1(text)}
      >{noteTitle1}</TextInput>
      <TextInput
            placeholder="Insert Note Description"
            style = { styles.TextInputStyleDetail }
            underlineColorAndroid = "transparent"
            onChangeText = { text => setNoteDescription1(text)}
      >{noteDescription1}</TextInput>
      <TouchableOpacity onPress={update} style={styles.buttonDetail} >
         <Text> Update record </Text>
       </TouchableOpacity>
    </View>
  );

}
 export default Update;