import { StyleSheet, View, Alert,TouchableWithoutFeedback } from 'react-native'
import React, { Component, useState, useEffect } from 'react';
import { Text, IconButton, TextInput, FAB } from 'react-native-paper'
import Header from '../component/Header'
import {styles} from './../stylesheet/global';
import {StackActions} from '@react-navigation/native';


 function SignUp({ navigation }) {
  return (
    <>
    <Header 
       titleText='Sign Up' />
        <IconButton
        icon="close"
        size={25}
        color='white'
        onPress={() => navigation.dispatch(StackActions.replace('Login'))}
        style={styles.iconButtonNotas}
    />
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#003f5c' }}>
     <Text> Sign Up </Text>
   </View>
   </>
 );
 }
export default SignUp;
