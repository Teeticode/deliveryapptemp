import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { SearchBar, HeaderTab, Categories, RestaurantItem } from '../components'

export default function Home() {
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
            <RestaurantItem/>
        </ScrollView>
        
        
    </SafeAreaView>
  )
}