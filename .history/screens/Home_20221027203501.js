import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SearchBar, HeaderTab, Categories, RestaurantItem } from '../components'
import {restaurants} from '../components/RestaurantItem'
export default function Home() {
    const [restaurantData, setRestaurantData] = useState(restaurants)
  return (
    <SafeAreaView
        style={{
            //backgroundColor: "#eee",
        }}
    >
        <View
            style={{
                backgroundColor:"white",
                padding:25
            }}
        >
            <HeaderTab/>
            <SearchBar/> 
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItem restaurantData={restaurantData}/>
        </ScrollView>
        
        
    </SafeAreaView>
  )
}