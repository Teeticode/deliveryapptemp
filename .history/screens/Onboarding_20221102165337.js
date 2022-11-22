import { View, Text, Image, StatusBar, ImageBackground } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

export default function Onboarding() {
  return (
    <View
      style={{flex:1, backgroundColor:Colors.white}}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
      <View 
        style={{flex:3, flexDirection:'column', backgroundColor:"#ddd"}}
      >
        <ImageBackground
          source={require('../assets/images/burger-restaurant.jpg')}
          style={{
            width:"100%",
            flex:1,
            backgroundColor:"#fff"
      
          }}
          resizeMode="contain"
        />
      </View>
      
    </View>
  )
}