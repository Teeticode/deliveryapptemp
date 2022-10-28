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
    <View 
        style={{
            marginTop:10
        }}
    >
        {restaurants.map((restaurant, index)=>(
            <View key={index}>
                <ImageBox img={restaurant.restaurantImage} />
                <RestaurantInfo text={restaurant.name}/>
            </View>
            
        ))}
    </View>
    
  )
}

const ImageBox = ({img})=>(
    <View
        style={{margin:10}}
    >
        <Image 
            source={img} 
            style={{
                width:"100%",
                height:150,
                resizeMode: 'cover',
                borderRadius:10,
                
                
            }}  
            
        />
        <TouchableOpacity style={{position:'absolute', top:10, right:20}}>
            <MaterialCommunityIcons name="heart-outline" color="#fff" size={25}/>
        </TouchableOpacity>
    </View>
)
const RestaurantInfo = ({text})=>(
    <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop: 10,
        marginBottom:20

        }}
    >
        <View style={{marginLeft: 10}}>
            <Text style={{fontWeight:'900', fontSize:16}}>{text}</Text>
            <Text>30-40 - min away</Text>
        </View>
        <View style={{marginRight: 10}}>
            <Text style={{fontWeight:'900'}}>4.5</Text>        
        </View>
        
    </View>
)