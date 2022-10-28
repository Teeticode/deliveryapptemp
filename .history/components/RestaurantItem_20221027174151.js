import { View, Text, Image } from 'react-native'
import React from 'react'

const restaurants = [
    {
        name:"Pizza Restaurant, Thika",
        image: require('../assets/images/pizza-restaurant.jpg')
    },
    {
        name:"Pizza Restaurant, Thika",
        image: require('../assets/images/fast-food.png')
    },
    {
        name:"Pizza Restaurant, Thika",
        image: require('../assets/images/fast-food.png')
    },
]
export default function RestaurantItem() {
  return (
    <View>
      <ImageBox/>
    </View>
  )
}

const ImageBox = ()=>(
    <View>
        <Image />
    </View>
)