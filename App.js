
import React from 'react';

import {
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {Home, Onboarding, Login, Splash, LoginBiz} from './screens';



const Stack = createNativeStackNavigator()
const App = () =>  {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Splash' component={Splash}/>
          <Stack.Screen name='Onboarding' component={Onboarding}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='LoginBiz' component={LoginBiz}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;
