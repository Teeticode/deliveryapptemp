import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTab from '../components/HeaderTab'

export default function Home() {
  return (
    <SafeAreaView
        style={{
            background: "#eee"
        }}
    >
        <View>
            
            <HeaderTab/>
        </View>

    </SafeAreaView>
  )
}