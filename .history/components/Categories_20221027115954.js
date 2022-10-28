import { View, Text, Image } from 'react-native'
import React from 'react'
const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: 'Pick-up',  
    },
    
    {
        image: require("../assets/images/bread.png"),
        text: 'Bakery Items',  
    },
    
    {
        image: require("../assets/images/fast-food.png"),
        text: 'Fast Foods',  
    },
    {
        image: require("../assets/images/deals.png"),
        text: 'Deals',  
    },
    {
        image: require("../assets/images/coffee.png"),
        text: 'Coffee & Tea',  
    },
    {
        image: require("../assets/images/desserts.png"),
        text: 'Desserts',  
    },
    
];

export default function Categories() {
  return (
    <View>
      <Image source={items[0].image} style={{width:50, height:40, resizeMode:'contain'}}/>
    </View>
  )
}