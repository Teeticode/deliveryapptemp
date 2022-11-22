import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

export default function Onboarding() {
  return (
    <View
      style={{flex:1, backgroundColor:Colors.white}}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
      <View>
      <Image 
        source={require('../assets/images/burger-restaurant.jpg')}
        style={{
          width:"100%",
          height:400
        }}
        resizeMode="contain"
      />
      </View>
      
    </View>
  )
}