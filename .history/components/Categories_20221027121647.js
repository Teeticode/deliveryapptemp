import { View, Text, Image, ScrollView } from 'react-native'
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
    <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
    >
        {items.map((item)=>(
            <View
            style={{
                alignItems:'center',
                marginRight:30
            }}
        >
            <Image 
                source={item.image} 
                style={{
                    width:50, 
                    height:40, 
                    resizeMode:'contain'
                }}
            />
            <Text
                style={{
                    fontSize: 13,
                    fontWeight: '900'
                }}
            >
                {item.text}
            </Text>
        </View>
        ))}
    </ScrollView>
  )
}