import { View, Text, StatusBar } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View
      style={{
        flex:1,
        backgroundColor:"#fff",
        flexDirection:'column'
      }}
    >
      <StatusBar barStyle='dark-content' backgroundColor='#fff'/>
      <View
        style={{
          flex:2,
          flexDirection:'column',
          justifyContent:'flex-start',
          alignItems:'center'
        }}
      >
        <Text>Welcome Back <Text style={{fontSize:30}}>👋</Text></Text>
      </View>
      
    </View>
  )
}