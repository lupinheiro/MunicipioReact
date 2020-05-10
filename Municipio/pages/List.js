import React, {Component } from 'react';
import { StyleSheet, Platform, View, Button, Image, TextInput, TouchableOpacity, Alert, YellowBox, FlatList } from 'react-native';
import { Text, FAB,IconButton, List } from 'react-native-paper';
import Header from '../component/Header';
import {styles} from '../stylesheet/global';

import {StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


 function PointList({ navigation }) {
   return (
      <>
      <Header 
         titleText='Pontos' />
          <IconButton
          icon="close"
          size={25}
          color='white'
          onPress={() => navigation.navigate('Login')}
          style={styles.iconButtonNotas}
      />
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#003f5c' }}>
       <Text> Lista de Pontos </Text>
     </View>
     </>
   );
 }
export default PointList;
