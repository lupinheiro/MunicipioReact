import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Platform, View, Button, Image, TextInput, TouchableOpacity, Alert, YellowBox,TouchableWithoutFeedback, FlatList } from 'react-native';
import { Text, FAB,IconButton, List } from 'react-native-paper';
import Header from '../component/Header';
import {styles} from './../stylesheet/global';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StackActions} from '@react-navigation/native';


const Stack = createStackNavigator();

import Realm from 'realm';

const realm = new Realm({
        path: 'Notes.realm',
        schema: [{
            name: 'Note',
            properties:
            {
                id: {type: 'int', default: 0},
                noteTitle: 'string',
                noteDescription: 'string',
         }}]
        });

const query = () => realm.objects('Note');

function getupdateddata(query) {
    const [data, setData] = useState(query());
  
    useEffect(
        () => {
          function handleChange(newData) {
            setData([...newData]);
          }
          const dataQuery = query();
          dataQuery.addListener(handleChange);
          return () => {
            dataQuery.removeAllListeners();
          };
        },
        [query]
    );
    return data;
  }

  function actionOnRow(item, navigation) {
    navigation.navigate('DetailNote', item);
 }


 function ViewNotes({ navigation }) {
    const Notes = getupdateddata(query);
    return (
        <>
            <Header 
            titleText='Notas Pessoais' />
            <IconButton
                icon="close"
                size={25}
                color='white'
                //onPress={() => navigation.dispatch(StackActions.replace('Login'))}
                onPress={() => navigation.navigate('Login')}
                style={styles.iconButtonNotas}/>
            <View style={styles.containerViewNotes}>
                 <FlatList
                     data={Notes}
                     keyExtractor={(item) => item.id}
                     renderItem={({ item }) => (
              <TouchableWithoutFeedback onPress={ () => actionOnRow(item, navigation)}>
                 <View style={styles.line}>
                   <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={styles.titleViewNotes}>{item.noteTitle}</Text>
                <Text style={styles.titleViewNotesDesc}>{item.noteDescription}</Text>
                </View>
               </View>
             </TouchableWithoutFeedback>
             )}
         />
                    <FAB
                    style={styles.fabViewNotes}
                    small
                    icon='plus'
                    label='Adicionar Nota'
                    onPress={() => navigation.navigate('AddNotes')}/>
            </View>
            </>      
    );
              
  }
export default ViewNotes;

