
import React from 'react';

import {
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {Home, Onboarding, Login, Splash} from './screens';



const Stack = createNativeStackNavigator()
const App = () =>  {
  return (
      <View><Home/></View>
  );
};


export default App;
