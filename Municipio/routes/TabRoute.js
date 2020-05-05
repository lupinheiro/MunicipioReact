import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import List from './../pages/List';
import StackMap from './StackMap';

const Tab = createBottomTabNavigator();

export default function TabRoute({navigation}) {
  return (
      <Tab.Navigator>
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="Map" component={StackMap} />
      </Tab.Navigator>
  );
}
