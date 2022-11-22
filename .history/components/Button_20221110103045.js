import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button() {
  return (
    <TouchableOpacity
            onPress={()=>{navigation.replace('Login')}}
            style={{
              justifyContent:"center",
              width:"90%",
              backgroundColor:Colors.primary,
              height:50, 
              marginBottom:30,
              borderRadius: 10
            }}
          >
            <Text
              style={{
                fontSize:14,
                paddingHorizontal:0,
                paddingVertical: 8,
                letterSpacing: 1.5,
                textAlign:'center',
                position:'relative',
                fontFamily:"Roboto-Medium",
                color:Colors.white,
                alignSelf:'center'
              }}
            >
              Get Started <MaterialCommunityIcons size={16} name='arrow-right'/>
            </Text>
          </TouchableOpacity>
  )
}