import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {StackActions} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Map from './../pages/Map';
import EditPonto from './../pages/EditPonto';


const Stack = createStackNavigator();

function StackMap({navigation}) {
   return (
       <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Map" component={Map}
          options={{headerShown : false,}}/>
          <Stack.Screen name="EditPonto" component={EditPonto}
          options={{headerShown : false,}}/>
       </Stack.Navigator>
   );
 }

 export default StackMap;
