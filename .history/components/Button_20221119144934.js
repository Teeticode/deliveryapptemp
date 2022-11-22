import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Button(props) {
  return (
    <TouchableOpacity
            style={{
              justifyContent:"center",
              width:"95%",
              backgroundColor:Colors.primary,
              height:50, 
              marginBottom:30,
              borderRadius: 10
            }}
            onPress={()=>props.navigation.replace("Login")}
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
              {props.text} <MaterialCommunityIcons size={16} name={props.name}/>
            </Text>
          </TouchableOpacity>
  )
}
