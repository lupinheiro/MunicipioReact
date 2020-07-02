import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  } from 'react-native';
 import {styles} from './../stylesheet/global';
 import {StackActions} from '@react-navigation/native';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../component/utils';

 function SignUp({ navigation }) {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function _SignUp(props){
    fetch('http://192.168.64.2/myslim/api/registar', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: email,

    username: username,
 
    password: password
 
  })
  
})
navigation.navigate('Login')
  }


  return (
   <View style={styles.container}>
      <Image
         style={styles.image}
         source={require('./../images/login.png')}
         />
        <Text style={styles.logo}>Registo</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Username..."
            placeholderTextColor="#fff"
            onChangeText={text => setName(text)}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#fff"
            onChangeText={text => setEmail(text)}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#fff"
            onChangeText={text => setPassword(text)}
          secureTextEntry
            />
        </View>
        <TouchableOpacity style={styles.loginBtn}
                onPress={()=> _SignUp()}>
          <Text style={styles.loginText}>Submeter</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}
          onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Cancelar</Text>
          </Text>
        </TouchableOpacity>
      </View>
 );
 }
export default SignUp;
