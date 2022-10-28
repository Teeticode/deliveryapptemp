import { View, Text, Image } from 'react-native'
import React from 'react'

const restaurants = [
    {
        restaurantImage: require("../assets/images/pizza-restaurant.jpg"),
        name:"Pizza Restaurant, Thika",
        
    },
    {
        restaurantImage: require("../assets/images/noodle-shop.jpg"),
        name:"Noodle Shop, Thika",
        
    },
    {
        restaurantImage: require("../assets/images/nasi-lemak.png"),
        name:"Nasi Lemak, Thika",
        image: require("../assets/images/nasi-lemak.png")
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