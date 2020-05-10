import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {StackActions} from '@react-navigation/native';

import ViewNotes from '../pages/ViewNotes'
import AddNotes from '../pages/AddNotes'

const Stack = createStackNavigator();

function NoteNav({navigation}) {
   return (
       <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="AddNotes" component={AddNotes}
          options={{headerShown : false,}}/>
          <Stack.Screen name="ViewNotes" component={ViewNotes}
          options={{ title: 'Adicionar Notas',
          headerShown: false, }}/>
       </Stack.Navigator>
   );
 }

export default NoteNav