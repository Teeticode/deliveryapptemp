import { View, Text, Image } from 'react-native'
import React from 'react'

const restaurants = [
    {
        name:"Pizza Restaurant, Thika",
        image: require('../assets/images/pizza-restaurant.jpg')
    },
    {
        name:"Noodle Shop, Thika",
        image: require('../assets/images/noodle-shop.jpg')
    },
    {
        name:"Nasi Lemak, Thika",
        image: require('../assets/images/nasi-lemak.png')
    },
]
export default function RestaurantItem() {
  return (
    <View>
        {restaurants.map((restaurant, index)=>(
            <ImageBox restaurant={restaurant} key={index}/>
        ))}
    </View>
    
  )
}

const ImageBox = ({restaurant})=>(
    <View>
        <Image source={restaurant.image} />
    </View>
)