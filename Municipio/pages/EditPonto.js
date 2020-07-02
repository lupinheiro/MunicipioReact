/*Home Screen With buttons to navigate to diffrent options*/
import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  } from 'react-native';
  import { Text, IconButton, TextInput, FAB } from 'react-native-paper'
 import {styles} from '../stylesheet/global';
 import {StackActions} from '@react-navigation/native';
 import Header from '../component/Header'
 

 function EditPonto({ navigation }) {
   return (
    <>
    <Header 
    titleText='Editar Ponto' />
    <IconButton
        icon="close"
        size={25}
        color='white'
        onPress={() => navigation.navigate('Map')}
        style={styles.iconButtonNotas}
    />

    <View style={styles.containerNotas}>
        <TextInput
            label="Nome"
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
            onPress={() => navigation.navigate('Map')}
        />
    </View>
</>
   );
 }
export default EditPonto;
