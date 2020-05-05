import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './../pages/Login';
import Notas from './../pages/Notas';
import TabRoute from './../routes/TabRoute';


const Stack = createStackNavigator();

function StackLogin({navigation}) {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
         <Stack.Screen name="Login" component={Login}
            options={{headerShown : false,}}/>
        <Stack.Screen name="Notas" component={Notas}
           options={{headerShown : true,}}/>
        <Stack.Screen name="TabRoute" component={TabRoute}
           options={{headerShown : false,}}/>
       </Stack.Navigator>
      </NavigationContainer>
   );
 }
 export default StackLogin;
