import React, {Component } from 'react';
import { StyleSheet, Platform, View, Button, Image, TextInput, TouchableOpacity, Alert, YellowBox, FlatList } from 'react-native';
import { Text, FAB, List } from 'react-native-paper';
import Header from '../component/Header';
import {styles} from './../stylesheet/global';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Realm from 'realm';
let realm;

class ViewNotes extends Component{

    constructor(props){
        super(props);
        realm = new Realm({path: 'Notes.realm'});
        var Notes = realm.objects('Note');
        this.state = {
            FlatListItems: Notes,
        };
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

    GoToAddNotes = () =>
    {
       this.props.navigation.navigate('AddNotes');

    }


    ListViewItemSeparator = () => {
        return (
          <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }} />
        );
      };

render(){
    return (
        <>
            <Header titleText='Notas Pessoais' />
            <View style={styles.containerViewNotes}>
                {realm.objects("Note").length === 0 ? (
                    <View style={styles.titleContainerViewNotes}>
                        <Text style={styles.title}ViewNotes>Sem Notas</Text>
                    </View>
                ) : (
                        <FlatList
                            data={this.state.FlatListItems}
                            ItemSeparatorComponent={this.ListViewItemSeparator}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={{ backgroundColor: 'white', padding: 20 }}>
                                    <Text>title: {item.noteTitle}</Text>
                                    <Text> description: {item.noteDescription}</Text>
                                </View>
                                
                            )}
                            />
                      
                           //keyExtractor={item => item.id.toString()}
                        
                    )}

                <FAB
                    style={styles.fabViewNotes}
                    small
                    icon='plus'
                    label='Adicionar Nota'
                    onPress = {this.GoToAddNotes}
                />
            </View>
        </>
    )
}
}

/*function ViewNotes({ navigation }) {
    // const [notes, setNotes] = useState([])
    const notes = useSelector(state => state)
    const dispatch = useDispatch()

    const addNote = note => {
        console.log(note)
        dispatch(addnote(note))
    }

    const deleteNote = id =>dispatch(deletenote(id))
*/
export default ViewNotes