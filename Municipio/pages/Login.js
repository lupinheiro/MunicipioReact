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
 import {sha256} from 'react-native-sha256';
import { NavigationActions } from 'react-navigation';
 


function Login({ navigation }) {
  const [password, setPassword] = useState('');
  const [username, setName] = useState('');
  const [user, setUser] = useState([]);
  
  function _Login(){
    if (username && password) {
      // sha256(password).then(hash => {
      //   setPassword(hash);
      // });
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: username, password: password}),
      };
      fetch('http://192.168.64.2/myslim/api/logar', requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data.status) {
            console.log(data);
            navigation.dispatch(StackActions.replace('TabRoute',{user: user}))
          }
        })
        .catch(error => console.error(error));
    }
  }
    return (
      <View style={styles.container}>
      <Image
         style={styles.image}
         source={require('./../images/login.png')}
         />
        <Text style={styles.logo}>+Municipio</Text>
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
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#fff"
            onChangeText={text => setPassword(text)}
            />
        </View>
        <TouchableOpacity style={styles.loginBtn}
                onPress={()=> _Login()}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}
          onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.loginText}>SignUp</Text>
          </Text>
        </TouchableOpacity>
           <TouchableOpacity style={styles.buttonAnon}
           onPress={() => navigation.dispatch(StackActions.replace('NoteNav'))}>
              <Text style={styles.loginText}>Anónimo</Text>
              </TouchableOpacity>
      </View>

    );
  }
  export default Login;
