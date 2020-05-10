
import { StyleSheet, View, Alert } from 'react-native'
import React from 'react'
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

export default class AddNotes extends React.Component {
    GoToNotes = () =>
    {
       //this.props.navigation.navigate('ViewNotes');
       this.props.navigation.dispatch(StackActions.replace('ViewNotes'));

    }
    constructor(){
        super();
        this.state = {
            noteTitle: '',
            noteDescription: '',
        }
  
        realm = new Realm({
            path: 'Notes.realm',
            schema: [{
                name: 'Note',
                properties:
                {
                    noteTitle: 'string',
                    noteDescription: 'string',
             }}]
            });
            
    } 
    
    addRecord=()=>{
        realm.write(() => {

        const {noteTitle} = this.state;
        const {noteDescription} = this.state;
                    realm.create('Note', {
                        noteTitle: that.state.noteTitle,
                        noteDescription: that.state.noteDescription,
                    });
        });
            
            Alert.alert("Successfully added Note")
        
       
    }

    render(){
        return (
            <>
            <Header 
            titleText='Adicionar Nova Nota' />
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
                    onChangeText= {noteTitle =>  this.setState({ noteTitle })}
                    style={styles.titleNotas}
                />
                <TextInput
                    label="Descrição"
                    onChangeText= { noteDescription => this.setState({ noteDescription })} 
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
                    onPress={this.addRecord.bind(this), this.GoToNotes}
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

