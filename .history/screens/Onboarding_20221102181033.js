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
              fontFamily:"Roboto-Bold", 
              color:Colors.black,
              fontSize:40
            }}
          >Emall</Text>
          <Text
            style={{
              maxWidth:'50%',
              fontFamily:"Roboto-Medium",
              color:"#999",
              fontSize:16,
              textAlign:'center',
              paddingTop:10
            }}
          >
            Shop at any of our stores na unaeza rent ufungue biz yako 👍 
          </Text>
        </View>
        <View
          style={{
            flex:1, 
            flexDirection:'column', 
            justifyContent:'flex-end', 
            alignItems:'center'
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent:"flex-end",
              width:"90%",
              backgroundColor:Colors.primary,
              height:50, 
              marginBottom:30,
              borderRadius: 10
            }}
          >
            <Text
              style={{
                fontSize:15,
                letterSpacing: 1.5,
                textAlign:'center',
                position:'relative',
                fontFamily:"Roboto-Medium",
                color:Colors.white
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  )
}