import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import StackMap from './StackMap';
import NoteNav from './NoteNav';

const Tab = createBottomTabNavigator();

export default function TabRoute({route, navigation}) {
  const  {user}  = route.params;
  return (
      <Tab.Navigator
      tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Map" component={StackMap} initialParams={user}
        options={{ title: 'Mapa' }} />
        <Tab.Screen name="Notas" component={NoteNav}
         options={{headerShown : false}}/>
      </Tab.Navigator>
  );
}
