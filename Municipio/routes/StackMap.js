import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {StackActions} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Map from './../pages/Map';
import EditPonto from './../pages/EditPonto';
import Adiciona from '../pages/Adiciona';


const Stack = createStackNavigator();

function StackMap({route, navigation}) {
   const {user}  = route.params;
   return (
       <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Map" component={Map} initialParams={user}
          options={{headerShown : false,}} />
          <Stack.Screen name="EditPonto" component={EditPonto}
          options={{headerShown : false,}}/>
          <Stack.Screen name="Adiciona" component={Adiciona}
          options={{headerShown : false,}}/>
       </Stack.Navigator>
   );
 }

 export default StackMap;
