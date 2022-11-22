import { View, Text, Image, StatusBar, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Button from '../components/Button'

export default function Onboarding({navigation}) {
  return (
    <View
      style={{flex:1, backgroundColor:Colors.white}}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
      <View 
        style={{flex:3, flexDirection:'column', backgroundColor:"#ddd"}}
      >
        <ImageBackground
          source={require('../assets/images/onboarding2.png')}
          style={{
            width:"100%",
            flex:1,
            backgroundColor:"#fff",
            height:400,
          }}
          resizeMode="contain"
        />
      </View>
      <View 
        style={{flex:2, backgroundColor:"#fff"}}
      >
        <View 
          style={{
            flex:1, 
            flexDirection:"column", 
            justifyContent:'flex-start',
            alignItems:'center',
            backgroundColor:"#fff"
          }}
        >
          <Text 
            style={{
              fontFamily:"Nerko One", 
              color:Colors.black,
              fontSize:40
            }}
          >Emall</Text>
          <Text
            style={{
              maxWidth:'50%',
              fontFamily:"Comfortaa",
              color:"#999",
              fontSize:16,
              textAlign:'center',
              paddingTop:10
            }}
          >
            Experience online shopping in a new way 👍 
          </Text>
        </View>
        <View
          style={{
            flex:1, 
            flexDirection:'column', 
            justifyContent:'flex-end', 
            alignItems:'center',
            marginBottom:30
          }}
          
        >
          <Button navigation={navigation} text='Get Started' name='arrow-forward-circle-outline' loc="Login"/>
          
         
        </View>
      </View>
      
    </View>
  )
}