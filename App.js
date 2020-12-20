import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ValueScreen from './screen/ValueScreen';
import History from './screen/History';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const [history , setHistory] =useState([])

  const detailHistory = (price , discount , discountPrice) => {
    setHistory([...history,{pri:price, dis:discount , disPri: discountPrice}])
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">{props=><ValueScreen {...props} detail={(price , discount , discountPrice) => {setHistory([...history,{pri:price, dis:discount , disPri: discountPrice}])}} />}</Stack.Screen>
        <Stack.Screen name="History">{props=><History {...props} history={history} />}</Stack.Screen>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
