
import { StyleSheet, View, Alert,TouchableWithoutFeedback,Dimensions } from 'react-native'
import React, { Component, useState, useEffect } from 'react';
import { Text, IconButton, TextInput, FAB } from 'react-native-paper'
import Header from '../component/Header'
import {styles} from './../stylesheet/global';
import {StackActions} from '@react-navigation/native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


//Database
import Realm from 'realm';
let realm;

function AddNotes({ navigation }) {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDescription, setNoteDescription] = useState('');

    

 
  
    function insert(){
      if (noteTitle && noteDescription) {
        realm = new Realm({ path: 'Notes.realm' });
  
        const lastRecord = realm.objects("Note").sorted('id', true)[0];
        const highestId = lastRecord == null ? 0 : lastRecord.id;
        const newid = highestId == null ? 1 : highestId + 1;
  
        realm.write(() => {
           realm.create('Note', {
             id: newid,
             noteTitle: noteTitle,
             noteDescription: noteDescription,
            });
        });
        navigation.navigate('ViewNotes');
      }
    }
        return (
            <>
            <Header 
            titleText='Adicionar Nova Nota' />
            <IconButton
                icon="close"
                size={25}
                color='white'
                onPress={() => navigation.navigate('ViewNotes')}
                style={styles.iconButtonNotas}
            />

            <View style={styles.containerNotas}>
                <TextInput
                    label="Título"
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
                    onPress={insert}
                />
            </View>
        </>
        )
    }





/*function AddNotes({ navigation }) {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteDescription, setNoteDescription] = useState('')

    function onSaveNote(props) {
        navigation.state.params.addNote({ noteTitle, noteDescription })
        navigation.goBack()
    }
*/
  export default AddNotes; 
