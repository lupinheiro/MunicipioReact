import React, { Component, useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import ActionButton from 'react-native-action-button';
import {styles} from '../stylesheet/global';
import Icon from 'react-native-vector-icons/FontAwesome'

function Notas({navigation}) {
  return (
    <View style={styles.container}>
    <ListView></ListView>
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#F8F8F8',
  }
});

export default Notas;
