import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HeaderTab() {
  return (
    <View style={{flexDirection:'row'}}>
        <HeaderButton text="Delivery"/>
        <HeaderButton text="Pickup"/>
    </View>
  )
}

const HeaderButton = (props)=>(
    <View style>
        <TouchableOpacity>
            <Text>{props.text}</Text>
        </TouchableOpacity>
        
    </View>
)