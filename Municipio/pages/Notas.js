import React from 'react';
import { View, Text, Button, SafeAreaView, Image } from 'react-native';
import {StackActions} from '@react-navigation/native';


 function List({ navigation }) {
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text> Notas </Text>
     </View>
   );
 }
export default List;