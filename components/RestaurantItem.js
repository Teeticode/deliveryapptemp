import { View, Text, Image, TouchableOpacity, ScrollView, InputAccessoryView, TextInput } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const restaurants = [
    {
        restaurantImage: require("../assets/images/pizza-restaurant.jpg"),
        name:"Pizza Restaurant, Thika",
        
    },
    {
        restaurantImage: require("../assets/images/noodle-shop.jpg"),
        name:"Noodle Shop, Thika",
        
    },
    {
        restaurantImage: require("../assets/images/nasi-lemak.jpg"),
        name:"Nasi Lemak, Thika",
        
    },
    {
        restaurantImage: require("../assets/images/salad.jpg"),
        name:"Salad, Thika",
        
    },
    {
        restaurantImage: require("../assets/images/burger-restaurant.jpg"),
        name:"Burger King, Thika",
        
    },
]
export default function RestaurantItem({restaurantData}) {
    const [wcomment, setwComment] = useState('')
  return (
    
        <View 
            style={{
                marginTop:10,
                padding: 15,
                backgroundColor:"white"
            }}
        >
        {restaurantData.map((restaurant, index)=>(
            <TouchableOpacity
                activeOpacity={0.5}
                style={{
                    marginBottom: 30,
                    alignSelf:'center',
                    width:"95%"
                }}
                key={index}
            >
            <View >
                <ImageBox img={restaurant.restaurantImage} text={restaurant.name} />
                <RestaurantInfo text={restaurant.name}/>
                <CartComment restaurant={restaurant} setwComment={setwComment} wcomment={wcomment}/>
            </View>
            </TouchableOpacity>
        ))}
    </View>
    
    
    
  )
}
const CartComment =({restaurant,setwComment, wcomment})=>(
    <View
        style={{
            margin:20,
            alignItems:'center',
            flexDirection:'row',
            justifyContent:'space-between'
        }}
    >
        <View>
            <TouchableOpacity
                onPress={()=>{setwComment('comment')}}
            >
                <MaterialCommunityIcons name='chat' style={{fontSize:30, color:'lightgray', borderColor:'black'}}/>
            </TouchableOpacity>
            {(wcomment==='comment')?<TextInput placeholder='Comment' value='' />:''}
            
        </View>
        
        <View>
            {(wcomment==='comment')?<MaterialCommunityIcons name='cancel' style={{fontSize:30, color:'lightgray', borderColor:'black'}}/>:<MaterialCommunityIcons name='cart' style={{fontSize:30, color:'lightgray', borderColor:'black'}}/>}
            
        </View>
    </View>
)
const ImageBox = ({img, text})=>(
    <View
        style={{
            margin:10,
            
        }}
    >
        <Image 
            source={img} 
            style={{
                width:"100%",
                height:150,
                resizeMode: 'cover',
                borderRadius:15,
                
                
            }}  
            
        />
        <TouchableOpacity style={{position:'absolute', top:10, right:20}}>
            <MaterialCommunityIcons name={(text==='Salad, Thika')?"heart": "heart-outline"} color={(text === 'Salad, Thika')?"red":"#fff"} size={25}/>
        </TouchableOpacity>
    </View>
)
const RestaurantInfo = ({text})=>(
    <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop: 10,
        marginBottom:20

        }}
    >
        <View style={{marginLeft: 10}}>
            <Text style={{fontWeight:'900', fontSize:16}}>{text}</Text>
            <Text>30-40 - min away</Text>
        </View>
        <View style={{marginRight: 10}}>
            <Text style={{fontWeight:'900'}}>4.5</Text>        
        </View>
        
    </View>
)