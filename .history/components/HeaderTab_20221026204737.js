import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HeaderTab() {
  return (
    <View style={{flexDirection:'row', alignSelf:'center', marginTop:10}}>
        <HeaderButton text="Delivery"/>
        <HeaderButton text="Pickup"/>
    </View>
  )
}

const HeaderButton = (props)=>(
        <TouchableOpacity
            style={{
                backgroundColor:'black',
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius:30
            }}
        >
            <Text
                style={{
                    color:"white",
                    fontSize:15,
                    fontWeight:"900"
                }}
            >{props.text}</Text>
        </TouchableOpacity>
)