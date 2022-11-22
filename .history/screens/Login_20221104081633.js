import { View, Text, StatusBar, StyleSheet } from 'react-native'
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
          alignItems:'center',
          paddingHorizontal:'3%'
        }}
      >
        <View
          style={{
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center'
          }}
        >
          <Text style={{fontFamily:"Roboto-Bold"}}>Welcome Back <Text style={{fontSize:30}}>👋</Text></Text>
        </View>
        <Text style={{fontFamily:'Roboto-Medium', fontSize:15, paddingTop:10,color:'#777' }}>Get back to Your account</Text>
      
      

      <View
        style={{flex:1, flexDirection:'column', backgroundColor:'#ddd'}}
      >

      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    position:'relative',
    height:'100%',
    width:'90%',
    fontFamily:'Roboto-Medium'
  }
})