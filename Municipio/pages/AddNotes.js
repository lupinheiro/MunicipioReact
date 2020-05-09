import React, { useState, Component } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { Text, IconButton, TextInput, FAB } from 'react-native-paper'
import Header from '../component/Header'
import {styles} from './../stylesheet/global';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//Database
import Realm from 'realm';
let realm;

    


class AddNotes extends Component{
    constructor(){
        super();
        this.state = {
            noteTitle: '',
            noteDescription: '',
        }

       /* realm = new Realm({
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
            */
    }   
    
    addRecord=()=>{
        realm.write(() => { 
            realm.create('Note', {
                noteTitle: this.state.noteTitle,
                noteDescription: this.state.noteDescription,
            });
        });
        Alert.alert("Successfully added Note")
    }

    GoToNotes = () =>
    {
       this.props.navigation.navigate('ViewNotes');

    }

    render(){
        return (
            <>
            <Header titleText='Adicionar Nova Nota' />
            <IconButton
                icon="close"
                size={25}
                color='white'
                onPress={this.GoToNotes}
                style={styles.iconButtonNotas}
            />

            <View style={styles.containerNotas}>
                <TextInput
                    label="Título"
                    mode='outlined'
                    onChangeText= { ( text ) => { this.setState({ noteTitle: text })} }
                    style={styles.titleNotas}
                />
                <TextInput
                    label="Descrição"
                    onChangeText= { ( text ) => { this.setState({ NoteDescription: text })} }
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
                    disabled={this.noteTitle == '' ? true : false}
                    onPress={this.addRegisto, this.GoToNotes}
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
   
}

export default AddNotes