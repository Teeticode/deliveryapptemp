import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';
const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: 'Pick-up',  
        id: 1
    },
    
    {
        image: require("../assets/images/bread.png"),
        text: 'Bakery Items', 
        id: 2 
    },
    
    {
        image: require("../assets/images/fast-food.png"),
        text: 'Fast Foods',  
        id: 3
    },
    {
        image: require("../assets/images/deals.png"),
        text: 'Deals', 
        id: 4 
    },
    {
        image: require("../assets/images/coffee.png"),
        text: 'Coffee & Tea', 
        id: 5 
    },
    {
        image: require("../assets/images/desserts.png"),
        text: 'Desserts', 
        id: 6 
    },
    
];

export default function Categories() {
  return (
    <View
        style={{
            backgroundColor: '#fff',
            paddingVertical: 10,
            paddingLeft: 20
        }}
    >
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        >
        {items.map((item)=>(
            <View
            style={{
                alignItems:'center',
                marginRight:30,
                
                marginLeft:10,
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
                marginBottom:10
            }}
            key={item.id}
        >
            {/*<Image 
                source={item.image} 
                style={{
                    width:50, 
                    height:40, 
                    resizeMode:'contain'
                }}
            />**/}
            <TouchableOpacity
                style={{
                    padding:7,
                    backgroundColor: Colors.primary,
                    borderRadius:20,
                    opacity:0.8
                }}
            >
            <Text
                style={{
                    fontSize: 13,
                    fontWeight: '900'
                }}
            >
                {item.text}
            </Text>
            </TouchableOpacity>
            
        </View>
        ))}
    </ScrollView>
    </View>
  )
}