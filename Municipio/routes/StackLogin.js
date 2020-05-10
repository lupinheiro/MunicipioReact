import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StackActions} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import {styles} from './../stylesheet/global';
import { StackNavigator} from 'react-navigation';

import Login from './../pages/Login';
import TabRoute from './../routes/TabRoute';
import NoteNav from './NoteNav';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';


const Stack = createStackNavigator();

function StackLogin({navigation}) {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
         <Stack.Screen name="Login" component={Login}
            options={{headerShown : false,}}/>
        <Stack.Screen name="NoteNav" component={NoteNav}
           options={{headerShown : false,}}/>
        <Stack.Screen name="TabRoute" component={TabRoute}
        options={({ navigation, route }) => ({
            headerShown : false,
              headerTitle: '+Município',
              headerRight: () => (
              <Button
                onPress={() => navigation.dispatch(StackActions.replace('Login'))}
                title="Log Out"
                color="#003f5c"/>
              ),
            })}/>
             <Stack.Screen name="ForgotPassword" component={ForgotPassword}
           options={{headerShown : true,}}/>
            <Stack.Screen name="SignUp" component={SignUp}
           options={{headerShown : true,}}/>
       </Stack.Navigator>
      </NavigationContainer>
   );
 }
 export default StackLogin;
