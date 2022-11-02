import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

export default function Splash() {
  return (
    <View 
      style={{
        flex:1,
        flexDirection:'column', 
        justifyContent:'center',
        alignItems:'center', 
        backgroundColor:Colors.primary
      }}>
      <StatusBar barStyle="light-content" hidden={false} backgroundColor={Colors.primary}/>
      <Image source={require('../assets/images/E-MALL.png')}/>
    </View>
  )
}