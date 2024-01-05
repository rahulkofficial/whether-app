import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Text,
    Image,
    View,
  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function Widgets() {

  const [theme,setTheme]=useState([
    {
      id:1,
      city:"Kochi",
      state:"Kerala",
      temp:"29°",
      weather:"Thunder storm"
    },
    {
      id:2,
      city:"Wayanad",
      state:"Kerala",
      temp:"02°",
      weather:"Snow"
    },
    {
      id:3,
      city:"Kozhikode",
      state:"Kerala",
      temp:"21°",
      weather:"Rainning"
    },
    {
      id:4,
      city:"Kollam",
      state:"Kerala",
      temp:"30°",
      weather:"Sunny"
    },
  ])


  const Widgets=()=>(
    theme.map((item)=>{
      if(item.weather==="Thunder storm"){
        return(
            <TouchableOpacity key={item.id} style={{marginBottom:14,}}>
              <LinearGradient colors={['#075B94', '#080745',]} start={{ x: 1, y: 0.5 }}
              end={{ x: 0, y: 0.5 }} style={{borderRadius:20,}}>
                <View style={{flexDirection:"row",alignItems:"center",
               justifyContent:"space-between",paddingVertical:22,
               paddingHorizontal:22,}}>
                  <View>
                    <Image source={require('../../assets/images/thunder.png')}/>
                  </View>
                  <View style={{alignItems:"center"}}>
                    <Text style={{color:"#fff",fontFamily:"Gordita-Medium",fontSize:16}}>{item.city},{item.state}</Text>
                    <Text style={{color:"#999",fontFamily:"Gordita-Medium",fontSize:16,marginTop:2}}>{item.weather}</Text>
                  </View>
                  <View>
                    <Text style={{color:"#fff",fontFamily:"Gordita-Bold",fontSize:38}}>{item.temp}</Text>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
        )
      }
      else if(item.weather==="Snow"){
        return(
            <TouchableOpacity key={item.id} style={{paddingVertical:22,
              paddingHorizontal:22,
              borderRadius:20,flexDirection:"row",marginBottom:14,
              alignItems:"center",justifyContent:"space-between",backgroundColor:"rgba(0,0,0,0.5)"}}>
              <View>
                <Image source={require('../../assets/images/snow.png')}/>
              </View>
              <View style={{alignItems:"center"}}>
                <Text style={{color:"#fff",fontFamily:"Gordita-Medium",fontSize:16}}>{item.city},{item.state}</Text>
                <Text style={{color:"#999",fontFamily:"Gordita-Medium",fontSize:16,marginTop:2}}>{item.weather}</Text>
              </View>
              <View>
                <Text style={{color:"#fff",fontFamily:"Gordita-Bold",fontSize:38}}>{item.temp}</Text>
              </View>
            </TouchableOpacity>
        )
      }
      else if(item.weather==="Rainning"){
        return(
            <TouchableOpacity key={item.id} style={{paddingVertical:22,
              paddingHorizontal:22,
              borderRadius:20,flexDirection:"row",marginBottom:14,
              alignItems:"center",justifyContent:"space-between",backgroundColor:"#fff"}}>
              <View>
                <Image source={require('../../assets/images/rain.png')}/>
              </View>
              <View style={{alignItems:"center"}}>
                <Text style={{color:"#000",fontFamily:"Gordita-Medium",fontSize:16}}>{item.city},{item.state}</Text>
                <Text style={{color:"#999",fontFamily:"Gordita-Medium",fontSize:16,marginTop:2}}>{item.weather}</Text>
              </View>
              <View>
                <Text style={{color:"#000",fontFamily:"Gordita-Bold",fontSize:38}}>{item.temp}</Text>
              </View>
            </TouchableOpacity>
        )
      }
      else if(item.weather==="Sunny"){
        return(
              <TouchableOpacity key={item.id} style={{marginBottom:14}}>
                <ImageBackground borderRadius={20} source={require('../../assets/images/clouds.png')} resizeMode="cover">
                  <View style={{flexDirection:"row",
                    alignItems:"center",justifyContent:"space-between",paddingVertical:22,
                    paddingHorizontal:22,borderRadius:20,}}>
                    <View>
                      <Image source={require('../../assets/images/rainy-cloud.png')}/>
                    </View>
                    <View style={{alignItems:"center"}}>
                      <Text style={{color:"#000",fontFamily:"Gordita-Medium",fontSize:16}}>{item.city},{item.state}</Text>
                      <Text style={{color:"#fff",fontFamily:"Gordita-Medium",fontSize:16,marginTop:2}}>{item.weather}</Text>
                    </View>
                    <View>
                      <Text style={{color:"#000",fontFamily:"Gordita-Bold",fontSize:38}}>{item.temp}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
        )
      }
    })
  )

  return (
    <SafeAreaView style={{flex:1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient colors={['#075B94', '#080745',]} style={styles.linearGradient}>
          <View>
            <Text style={{color:"#fff",marginTop:80,fontFamily:"Gordita-Medium",fontSize:26,textAlign:"center"}}>Widgets</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:20,marginBottom:60}}>
            <Widgets/>
          </ScrollView>
        </LinearGradient>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:16,
  },

})