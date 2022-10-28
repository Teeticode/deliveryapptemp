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
        restaurantImage: require("../assets/images/nasi-lemak.jpg"),
        name:"Nasi Lemak, Thika",
        
    },
]
export default function RestaurantItem() {
  return (
    <View>
        {restaurants.map((restaurant, index)=>(
            <ImageBox rest={restaurant} key={index}/>
        ))}
    </View>
    
  )
}

const ImageBox = ({rest})=>(
    <View>
        <Image 
            source={rest.restaurantImage} 
            style={{
                width:200,
                height:90
            }}  
        />
    </View>
)