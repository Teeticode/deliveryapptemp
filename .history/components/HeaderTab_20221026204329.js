import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HeaderTab() {
  return (
    <View style={{flexDirection:'row', alignSelf:'center'}}>
        <HeaderButton text="Delivery"/>
        <HeaderButton text="Pickup"/>
    </View>
  )
}

const HeaderButton = (props)=>(
        <TouchableOpacity>
            <Text>{props.text}</Text>
        </TouchableOpacity>
)