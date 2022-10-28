import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
                width:"100%",
                height:150
            }}  
            
        />
        <TouchableOpacity>
            <MaterialCommunityIcons name="heart-outline" size={25}/>
        </TouchableOpacity>
    </View>
)