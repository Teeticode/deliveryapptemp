import { View, Text, Image, StatusBar, ImageBackground, TouchableOpacity } from 'react-native'
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
          source={require('../assets/images/onboarding2.png')}
          style={{
            width:"100%",
            flex:1,
            backgroundColor:"#fff",
            height:400,
          }}
          resizeMode="contain"
        />
      </View>
      <View 
        style={{flex:2, backgroundColor:"grey"}}
      >
        <View 
          style={{
            flex:1, 
            flexDirection:"column", 
            justifyContent:'flex-start',
            alignItems:'center',
            backgroundColor:"#fff"
          }}
        >
          <Text 
            style={{
              fontFamily:"OpenSans-Bold", 
              color:Colors.black,
              fontSize:30
            }}
          >Emall</Text>
          <Text
            style={{
              maxWidth:'50%',
              fontFamily:"OpenSans-Medium",
              color:"#999",
              fontSize:14,
              textAlign:'center',
              paddingTop:10
            }}
          >
            Shop at any of the stores 
          </Text>
        </View>
        <View
          style={{flex:1, flexDirection:'column', justifyContent:'flex-end', alignItems:'center'}}
        >
          <TouchableOpacity

          >

          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  )
}