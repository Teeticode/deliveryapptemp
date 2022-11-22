import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function Button(props) {
  return (
    <TouchableOpacity
            style={{
              justifyContent:"center",
              width:"95%",
              backgroundColor:Colors.primary,
              height:60, 
              marginBottom:30,
              borderRadius: 10
            }}
            onPress={()=>props.navigation.replace("Login")}
          >
            <Text
              style={{
                fontSize:14,
                paddingHorizontal:0,
                paddingVertical: 9,
                letterSpacing: 1.5,
                textAlign:'center',
                position:'relative',
                fontFamily:"Nerko One",
                color:Colors.white,
                alignSelf:'center'
              }}
            >
              {props.text} 
            </Text>
          </TouchableOpacity>
  )
}
