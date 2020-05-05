import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {StackActions} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Map from './../pages/Map';
import AddNewToMap from './../pages/AddNewToMap';

const Stack = createStackNavigator();

function StackMap({navigation}) {
   return (
       <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Map" component={Map}
          options={{
             headerTitle: 'Mapa',
             headerRight: () => (
             <Button
               onPress={() => navigation.dispatch(StackActions.replace('Login'))}
               title="Log Out"
               color="#003f5c"/>
             ),
             }}/>
          <Stack.Screen name="AddNewToMap" component={AddNewToMap}
          options={{ title: 'Adicionar Pontos' }}/>
       </Stack.Navigator>
   );
 }

 export default StackMap;
