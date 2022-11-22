import { View, Text, StatusBar, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

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
          <Text style={{fontFamily:"Roboto-Bold"}}>Welcome Back to Emall <Text style={{fontSize:30}}>👋</Text></Text>
        </View>
        <Text style={{fontFamily:'Roboto-Light', fontSize:15, paddingTop:10,color:'#777' }}>Login To Account</Text>
      
      

      <View
        style={{flexDirection:'column',paddingTop:20 }}
      >
        <View
          style={{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#ededed',
            width:'100%',
            borderRadius:10,
            height:60,
            paddingLeft:20
          }}
        >
          <Icon name='envelope-o' size={22} color='#818181'/>
          <TextInput style={styles.input} placeholder='Enter Email' placeholderTextColor='#818181'/>
        </View>
        <View
          style={{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#ededed',
            width:'100%',
            borderRadius:10,
            height:60,
            paddingTop:10,
            paddingLeft:20
          }}
        >
          <Icon name='lock' size={22} color='#818181'/>
          <TextInput style={styles.input} placeholder='Enter Password' placeholderTextColor='#818181'/>
        </View>
        
      </View>
      </View>

      <View
        style={{flex:1, flexDirection:'column', backgroundColor:'#ddd'}}
      >

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    position:'relative',
    height:'100%',
    width:'90%',
    fontFamily:'Roboto-Medium',
    paddingLeft:15
  }
})
