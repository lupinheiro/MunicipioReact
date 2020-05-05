import React from 'react';
import { View, Text, Button, SafeAreaView, Image } from 'react-native';

 function Map({ navigation }) {
   return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>map main...</Text>
         <Button
           onPress={() => navigation.navigate('AddNewToMap')}
           title="Add new to map"
         />
     </View>
   );
 }
export default Map;
