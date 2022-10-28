import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
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
    {
        restaurantImage: require("../assets/images/salad.jpg"),
        name:"Salad, Thika",
        
    },
    {
        restaurantImage: require("../assets/images/burger-restaurant.jpg"),
        name:"Burger King, Thika",
        
    },
]
export default function RestaurantItem() {
  return (
    <ScrollView vertical>
        {restaurants.map((restaurant, index)=>(
            <View key={index}>
                <ImageBox img={restaurant.restaurantImage} />
                <RestaurantInfo text={restaurant.name}/>
            </View>
            
        ))}
    </ScrollView>
    
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
        <TouchableOpacity style={{position:'absolute', top:10, right:20}}>
            <MaterialCommunityIcons name="heart-outline" color="#fff" size={25}/>
        </TouchableOpacity>
    </View>
)
const RestaurantInfo = ()=>(
    <View>
        <Text> </Text>
    </View>
)