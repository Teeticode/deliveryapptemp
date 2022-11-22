import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from '../components/Button'

export default function Login() {
  return (
    <View
      style={{
        flex:1,
        backgroundColor:"#fff",
        flexDirection:'column'
      }}
    >
      <StatusBar barStyle='dark-content' backgroundColor='#fff'/>
      <View
        style={{
          flex:2,
          flexDirection:'column',
          justifyContent:'flex-start',
          alignItems:'center',
          paddingHorizontal:'3%'
        }}
      >
        <View
          style={{
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center'
          }}
        >
          <Text style={{fontFamily:"Roboto-Bold"}}>Welcome Back to Emall <Text style={{fontSize:30}}>👋</Text></Text>
        </View>
        <Text style={{fontFamily:'Roboto-Light', fontSize:15, paddingTop:10,color:'#777' }}>Login To Account</Text>
      
      

      <View
        style={{flexDirection:'column',paddingTop:20 }}
      >
        <View
          style={{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#ededed',
            width:'100%',
            borderRadius:10,
            height:60,
            paddingLeft:20
          }}
        >
          <Icon name='envelope-o' size={22} color='#818181'/>
          <TextInput style={styles.input} placeholder='Enter Email' placeholderTextColor='#818181'/>
        </View>
        <View
          style={{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#ededed',
            width:'100%',
            borderRadius:10,
            height:60,
            marginTop:20,
            paddingLeft:20
          }}
        >
          <Icon name='lock' size={22} color='#818181'/>
          <TextInput style={styles.input} placeholder='Enter Password' placeholderTextColor='#818181'/>
        </View>
        
        
      </View>
      <View
          style={{
            width:"95%"
          }}
        >
          <Text 
            style={{
              fontSize:15,
              marginTop:10,
              fontFamily:"Roboto-Bold",
              alignSelf:'flex-end'
              
            }}
          >
            Forgot Password ?
          </Text>
        </View>
        <View
          style={{
            width:"100%",
            marginTop:10,
            alignSelf:'center'
          }}
        >
          <Button text='Login'/>
        </View>
        
      </View>

      <View
        style={{flex:2, flexDirection:'column', backgroundColor:'#fff', paddingHorizontal:'3%'}}
      >
        <Text 
          style={{
            fontFamily:'Roboto-Bold',
            textAlign:'center',
            marginVertical:5, 
            color:'#818181',
            fontSize:20
          }}
        >Or</Text>
        <View
          style={{
            flexDirection:'column',
            alignItems:'center',
            width:'100%'
          }}
        >
          <TouchableOpacity
            style={styles.socials}
          >
          <Image style={{width:25, height:25, marginLeft:15}} source={require('../assets/images/google.png')} />
          <Text style={{width:'80%', textAlign:'center', fontSize:16}}>Sign in with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socials}
          >
          <Image style={{width:25, height:25, marginLeft:15}} source={require('../assets/images/facebook.png')} />
          <Text style={{width:'80%', textAlign:'center', fontSize:16}}>Sign in with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socials}
          >
          <Image style={{width:25, height:25, marginLeft:15}} source={require('../assets/images/twitter.png')} />
          <Text style={{width:'80%', textAlign:'center', fontSize:16}}>Sign in with Twitter</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    position:'relative',
    height:'100%',
    width:'90%',
    fontFamily:'Roboto-Medium',
    paddingLeft:15
  },
  socials:{
    height:55,
    width:'100%',
    borderWidth:1,
    borderRadius:10,
    borderColor: '#ddd',
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    marginTop:10
  }
})
