import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {StackActions} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import ViewNotes from '../pages/ViewNotes'
import AddNotes from '../pages/AddNotes'
import DetailNote from '../pages/DetailNote'
import Update from '../pages/Update'
const Stack = createStackNavigator();

function NoteNav({navigation}) {
   return (
       <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="ViewNotes" component={ViewNotes}
          options={{headerShown : false,}}/>
          <Stack.Screen name="AddNotes" component={AddNotes}
          options={{ title: 'Adicionar Notas',
          headerShown: false, }}/>
          <Stack.Screen name="DetailNote" component={DetailNote}
             options={{headerShown : false,}}
          />
          <Stack.Screen name="Update" component={Update}
             options={{headerShown : false,}}
          />
             
       </Stack.Navigator>
   );
 }

export default NoteNav