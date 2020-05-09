import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text, FAB, List } from 'react-native-paper'
import Header from '../component/Header'
import { useSelector, useDispatch } from 'react-redux'
import {styles} from './../stylesheet/global';

function ViewNotes({ navigation }) {
    // const [notes, setNotes] = useState([])
    const notes = useSelector(state => state)
    const dispatch = useDispatch()

    const addNote = note => {
        console.log(note)
        dispatch(addnote(note))
    }

    const deleteNote = id =>dispatch(deletenote(id))

    return (
        <>
            <Header titleText='Notas Pessoais' />
            <View style={styles.containerViewNotes}>
                {notes.length === 0 ? (
                    <View style={styles.titleContainerViewNotes}>
                        <Text style={styles.title}ViewNotes>Sem Notas</Text>
                    </View>
                ) : (
                        <FlatList
                            data={notes}
                            renderItem={({ item }) => (
                                <List.Item
                                    title={item.note.noteTitle}
                                    description={item.note.noteDescription}
                                    descriptionNumberOfLines={1}
                                    titleStyle={styles.listTitleViewNotes}
                                    onPress = {()=> deleteNote(item.id)}
                                />
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    )}

                <FAB
                    style={styles.fabViewNotes}
                    small
                    icon='plus'
                    label='Adicionar Nota'
                    onPress={() => navigation.navigate('AddNotes', {
                        addNote
                    })
                    }
                />
            </View>
        </>
    )
}

export default ViewNotes