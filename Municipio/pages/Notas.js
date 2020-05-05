import React, { Component, useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import ActionButton from 'react-native-action-button';
import {styles} from './../stylesheet/global';
import Icon from 'react-native-vector-icons/FontAwesome'

function Notas({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Lista de Notas</Text>
      </View>

  );
}
export default Notas;
