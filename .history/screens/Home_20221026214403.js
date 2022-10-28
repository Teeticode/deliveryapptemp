import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { SearchBar, HeaderTab } from '../components'

export default function Home() {
  return (
    <SafeAreaView
        style={{
            backgroundColor: "#eee",
            
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
        
    </SafeAreaView>
  )
}