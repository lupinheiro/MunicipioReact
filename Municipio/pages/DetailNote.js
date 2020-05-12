import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Platform, View, Button, Image, TextInput, TouchableOpacity, Alert, YellowBox, ListView, Dimensions } from 'react-native';
import Header from '../component/Header';
import { Text, FAB,IconButton, List } from 'react-native-paper';
import {styles} from './../stylesheet/global';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StackActions} from '@react-navigation/native';


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

import Realm from 'realm';
let realm ;

function DetailNote({ route, navigation }) {
  const { id, noteTitle, noteDescription } = route.params;
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });


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
    <>
        <Header 
        titleText='Notas Pessoais' />
     <IconButton
        icon="close"
        size={25}
        color='white'
        //onPress={() => navigation.dispatch(StackActions.replace('ViewNotes'))}
        onPress={() => navigation.navigate('ViewNotes')}
        style={styles.iconButtonNotas}/>
    <View style={styles.MainContainerDetailP}>
      <View style={dimensions.window.height > dimensions.window.width ? styles.MainContainerDetailP : styles.MainContainerDetailL }>
          <Text style = { styles.TextInputStyleDetail }>Note Title: {noteTitle}</Text>
          <Text style = { styles.TextInputStyleDetail }>Note Description: {noteDescription}</Text>
      </View>
      <View style={styles.secondcontainerDetailP}>
          <TouchableOpacity onPress={updateData} style={styles.buttonDetail} >
             <Text> Update record </Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={deleteData} style={styles.buttonDetail} >
              <Text> Delete record </Text>
          </TouchableOpacity>
      </View>
    </View>
    </>
  );
}

 export default DetailNote;