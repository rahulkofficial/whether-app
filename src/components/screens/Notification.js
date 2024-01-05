import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    View,
  } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


export default function Notification() {

  const [notification,setNoti]=useState([
    {
      id:1,
      title:"A Storm is approaching!",
      descrpion:`A high frequency storm is likely to approach your city with a magnitude of 6.0. it is likely to deal damage to weak structures. Please stay safe indoor or under shelter`,
      Image:require("../../assets/images/rain.png"),
    },
    {
      id:2,
      title:"There will be snow tomorrow",
      descrpion:`A high frequency storm is likely to approach your city with a magnitude of 6.0. it is likely to deal damage to weak structures. Please stay safe indoor or under shelter`,
      Image:require("../../assets/images/snow.png"),
    },
    {
      id:3,
      title:"It's a sunny day",
      descrpion:`A high frequency storm is likely to approach your city with a magnitude of 6.0. it is likely to deal damage to weak structures. Please stay safe indoor or under shelter`,
      Image:require("../../assets/images/rainy-cloud.png"),
    },
    {
      id:4,
      title:"There will be storm tomorrow",
      descrpion:`A high frequency storm is likely to approach your city with a magnitude of 6.0. it is likely to deal damage to weak structures. Please stay safe indoor or under shelter`,
      Image:require("../../assets/images/rainy-cloud.png"),
    },
  ])

  const Notification=()=>(
    notification.map((item)=>{
      return(
        <View key={item.id} style={{marginBottom:20,
        paddingVertical:20,paddingHorizontal:22,borderRadius:20,backgroundColor:"#006ca5"}}>
          <View style={{flexDirection:"row",alignItems:"center",marginBottom:20}}>
            <View style={{backgroundColor:"#080745",padding:10,borderRadius:50,marginRight:20}}>
              <Image source={item.Image} style={{height:40,width:40}}/>
            </View>
            <Text style={{color:"#fff",fontFamily:"Gordita-Medium",fontSize:17}}>{item.title}</Text>
          </View>
          <View>
            <Text style={{color:"#fff",fontFamily:"Gordita-Medium",fontSize:16,lineHeight:20}}>{item.descrpion}</Text>
          </View>
        </View>
      )
    })
  )

  return (
    <SafeAreaView style={{flex:1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient colors={['#075B94', '#080745',]} style={styles.linearGradient}>
          <View>
            <Text style={{color:"#fff",marginTop:70,fontFamily:"Gordita-Medium",fontSize:26,textAlign:"center"}}>Notification</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:20,marginBottom:60}}>
            <Notification/>
          </ScrollView>
        </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:20,
  },

})
