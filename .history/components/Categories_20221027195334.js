import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
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
            marginTop:5,
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
                backgroundColor: 'lightgray',
                marginLeft:20,
                borderRadius: '50%',
                padding: 10,
                marginTop: 10
            }}
            key={item.id}
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
    </View>
  )
}