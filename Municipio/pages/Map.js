import React from 'react';
import { View, Text, Button, SafeAreaView, Image } from 'react-native';
import {StackActions} from '@react-navigation/native';

 function Map({ navigation }) {
   return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Aqui irá aparecer o Mapa</Text>
         <Button
           onPress={() => navigation.navigate('AddNewToMap')}
           title="Adicionar Ponto" />
     </View>
   );
 }
export default Map;
