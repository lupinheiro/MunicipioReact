import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';



import StackMap from './StackMap';
import NoteNav from './NoteNav';

const Drawer = createDrawerNavigator();

export default function DrawerRoute({route, navigation}) {
  const  user  = route.params;

  return (
      <Drawer.Navigator>  
        <Drawer.Screen name="Map" component={StackMap} initialParams={user}
        options={{ title: 'Mapa' }} />
        <Drawer.Screen name="Notas" component={NoteNav}
         options={{headerShown : false}}/>
      </Drawer.Navigator>
  );
}
