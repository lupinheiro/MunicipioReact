import React from 'react';
import { View, Text, Button, SafeAreaView, Image } from 'react-native';
import {StackActions} from '@react-navigation/native';


 function List({ navigation }) {
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#003f5c' }}>
       <Text> Lista de Pontos </Text>
     </View>
   );
 }
export default List;
