import React from 'react';
import { View, Text, Button, SafeAreaView, Image } from 'react-native';
import {StackActions} from '@react-navigation/native';
import Header from '../component/Header'



 function ForgotPassword({ navigation }) {
   return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#003f5c' }}>
       <Text> ForgotPassword screen </Text>
     </View>
   );
 }
export default ForgotPassword;
