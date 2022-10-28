import { View, Text } from 'react-native'
import React from 'react'
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete"

export default function SearchBar() {
  return (
    <View
        style={{
            marginTop: 15,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        }}
    >
        <GooglePlacesAutocomplete
        placeholder='Search'
        styles={{
            textInput:{
                backgroundColor: '#eee',
                borderRadius: 20,
                fontWeight: "700",
                marginTop: 7,
                
            }
        }}
        />
    </View>
  )
}