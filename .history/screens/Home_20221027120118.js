import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { SearchBar, HeaderTab, Categories } from '../components'

export default function Home() {
  return (
    <SafeAreaView
        style={{
            backgroundColor: "#eee",
            flex:0
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
        <Categories />
    </SafeAreaView>
  )
}