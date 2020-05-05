import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Map from './../pages/Map';
import AddNewToMap from './../pages/AddNewToMap';

const Stack = createStackNavigator();

function StackMap({navigation}) {
   return (
       <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Map" component={Map}/>
          <Stack.Screen name="AddNewToMap" component={AddNewToMap}/>
       </Stack.Navigator>
   );
 }

 export default StackMap;
