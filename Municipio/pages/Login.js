import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity
  } from 'react-native';
 import {styles} from './../stylesheet/global';
 import {StackActions} from '@react-navigation/native';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}
            defaultValue={email}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword(text)}
            defaultValue={password}
            />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}
        onPress={() => navigation.dispatch(StackActions.replace('TabRoute'))}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
           <TouchableOpacity style={styles.buttonAnon}
           onPress={() => navigation.navigate('NoteNav')}>
              <Text style={styles.loginText}>Anónimo</Text>
              </TouchableOpacity>
      </View>

    );
  }
  export default Login;
