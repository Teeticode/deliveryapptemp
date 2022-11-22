import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Onboarding() {
  return (
    <View>
      <Image 
        source={require('../assets/images/burger-restaurant.jpg')}
        style={{
          width:250,
          height:250
        }}
      />
    </View>
  )
}