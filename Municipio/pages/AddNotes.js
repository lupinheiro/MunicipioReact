import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, IconButton, TextInput, FAB } from 'react-native-paper'
import Header from '../component/Header'
import {styles} from './../stylesheet/global';

function AddNotes({ navigation }) {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteDescription, setNoteDescription] = useState('')

    function onSaveNote(props) {
        navigation.state.params.addNote({ noteTitle, noteDescription })
        navigation.goBack()
    }

    return (
        <>
            <Header titleText='Adicionar Nova Nota' />
            <IconButton
                icon="close"
                size={25}
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.iconButtonNotas}
            />

            <View style={styles.containerNotas}>
                <TextInput
                    label="Título"
                    value={noteTitle}
                    mode='outlined'
                    onChangeText={setNoteTitle}
                    style={styles.titleNotas}
                />
                <TextInput
                    label="Descrição"
                    value={noteDescription}
                    onChangeText={setNoteDescription}
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
                    disabled={noteTitle == '' ? true : false}
                    onPress={() => onSaveNote()}
                />
            </View>
        </>
    )
}

export default AddNotes