import { View, Text } from 'react-native'
import React from 'react'

export default function Splash() {
  return (
    <View 
      style={{
        flex:1,
        flexDirection:'column', 
        justifyContent:'center',
        alignItems:'center'  
      }}>
      <Text>Splash</Text>
    </View>
  )
}