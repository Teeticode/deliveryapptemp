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

const HeaderButton = ({text})=>(
    <View>
        <TouchableOpacity>
            <Text>{text}</Text>
        </TouchableOpacity>
        
    </View>
)