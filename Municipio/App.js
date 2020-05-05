/**
 * Trabalho Pratico MunicipioReact
 *
 *
 * @format
 * @flow strict-local
 */

 import React, {Component, useState} from 'react';
 import {
   StyleSheet,
   Image,
   Text,
   View,
   TextInput,
   TouchableOpacity
   } from 'react-native';

 export default function App(){
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

     return (
       <View style={styles.container}>
       <Image
          style={styles.image}
          source={require('./images/login.png')}
          />
         <Text style={styles.logo}>+Município</Text>
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
         <TouchableOpacity style={styles.loginBtn}>
           <Text style={styles.loginText}>LOGIN</Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={styles.loginText}>Signup</Text>
         </TouchableOpacity>
            <TouchableOpacity style={styles.buttonAnon}>
               <Text style={styles.loginText}>Anónimo</Text>
               </TouchableOpacity>
       </View>

     );
   }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#003f5c',
     alignItems: 'center',
     justifyContent: 'center',
   },
   logo:{
     fontWeight:"bold",
     fontSize:50,
     color:"#fb5b5a",
     marginBottom:40
   },
   inputView:{
     width:"80%",
     backgroundColor:"#465881",
     borderRadius:25,
     height:50,
     marginBottom:20,
     justifyContent:"center",
     padding:20
   },
   inputText:{
     height:50,
     color:"white"
   },
   forgot:{
     color:"white",
     fontSize:11
   },
   loginBtn:{
     width:"80%",
     backgroundColor:"#fb5b5a",
     borderRadius:25,
     height:50,
     alignItems:"center",
     justifyContent:"center",
     marginTop:40,
     marginBottom:10
   },
   loginText:{
     color:"white"
   },
   image:{
     width: 200,
     height: 200,
   },
   buttonAnon:{
     width:"80%",
     height:"20%",
     backgroundColor:"#fb5b5a",
     borderRadius:25,
     height:50,
     alignItems:"center",
     justifyContent:"center",
     marginTop:60
   },
 });
