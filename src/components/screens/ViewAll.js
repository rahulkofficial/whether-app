import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    SafeAreaView,
    StatusBar,
    ScrollView,
    StyleSheet,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    TouchableHighlight,
    View,
  } from 'react-native';
import moment from 'moment';

export default function ViewAllScreen({ route }) {

  const w_today=route.params.param;
  var touchProps = {
    activeOpacity: 1,
    underlayColor: "#075B94",                               
    onPress: () => console.log('HELLO'),                 
  };
  const[days,setDays]=useState(5);
  const [coming,setComing]=useState([
    {
      id:1,
      temp:"29°",
      day:moment().add(1,'day').format('dddd'),
      date:moment().add(1,'day').format("DD MMMM"),
      Image:require('../../assets/images/thunder.png'),

    },
    {
      id:2,
      temp:"21°",
      day:moment().add(2,'day').format('dddd'),
      date:moment().add(2,'day').format("DD MMMM"),
      Image:require('../../assets/images/snow.png'),
    },
    {
      id:3,
      temp:"24°",
      day:moment().add(3,'day').format('dddd'),
      date:moment().add(3,'day').format("DD MMMM"),
      Image:require('../../assets/images/rainy-cloud.png'),
    },
    {
      id:4,
      temp:"30°",
      day:moment().add(4,'day').format('dddd'),
      date:moment().add(4,'day').format("DD MMMM"),
      Image:require('../../assets/images/lighting.png'),
    },
    {
      id:5,
      temp:"22°",
      day:moment().add(5,'day').format('dddd'),
      date:moment().add(5,'day').format("DD MMMM"),
      Image:require('../../assets/images/rain.png'),
    },
  ])

  const Forecast=()=>(
      coming.slice(0,(days+1)).map((item)=>{
        return(
          <TouchableOpacity key={item.id} style={{flexDirection:"row",marginBottom:10,paddingVertical:10,paddingHorizontal:22,borderRadius:20,alignItems:"center",justifyContent:"space-between",backgroundColor:"rgba(0,0,0,0.28)"}}>
            <View>
              <Text style={{color:"#fff",fontFamily:"Gordita-Medium",fontSize:18}}>{item.day}</Text>
              <Text style={{color:"#fff",fontFamily:"Gordita-Medium",fontSize:16,marginTop:2}}>{item.date}</Text>
            </View>
            <View>
              <Text style={{color:"#fff",fontFamily:"Gordita-Bold",fontSize:38}}>{item.temp}</Text>
            </View>
            <View>
              <Image source={item.Image} style={{width:70,height:70}} />
            </View>
          </TouchableOpacity>
        )
      })
    )


  return (
    <SafeAreaView style={{flex:1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient colors={['#075B94', '#080745',]} style={styles.linearGradient}>
          <View><Text style={{color:"#fff",marginTop:50,fontFamily:"Gordita-Medium",fontSize:26,textAlign:"center"}}>Forecast report</Text></View>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",marginTop:26,marginBottom:20}}>
            <Text style={{color:"#fff",fontFamily:"Gordita-Medium",fontSize:24}}>Today</Text>
          </View>
          <View>
            <FlatList horizontal
              bot
              showsHorizontalScrollIndicator={false}
              data={w_today}
              renderItem={(item,index) => (
                <TouchableHighlight  {...touchProps}   key={item.item.id} style={{borderRadius:20,marginRight:10,backgroundColor:"rgba(0,0,0,0.3)",height:94}}>
                  <View  style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:16}}>
                    <Image source={item.item.Image} style={{width:60,height:60,marginRight:10}} />
                    <View>
                      <Text style={{color:"#fff",fontFamily:"Gordita-Regular",fontSize:18}}>{item.item.time}</Text>
                      <Text style={{color:"#fff",fontFamily:"Gordita-Medium",fontSize:20,marginTop:10}}>{item.item.temp}</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              )}
            keyExtractor={(item)=>item.id.toString()}/>
          </View>
           <View style={{flexDirection:"row",alignItems:"center",
            justifyContent:"space-between",width:"100%",marginTop:26}}>
            <View>
              <Text style={{color:"#fff",fontFamily:"Gordita-Medium",fontSize:22}}>Next forecast</Text>
            </View>
            <TouchableOpacity>
              <View style={{flexDirection:'row',alignItems:"center",backgroundColor:"rgba(0,0,0,0.3)",paddingHorizontal:10,paddingVertical:6,borderRadius:16}}> 
                <Text style={{color:"#fff",fontFamily:"Gordita-Regular"}}>{days} day</Text>
                <Image style={{marginLeft:8,height:10,width:10}} source={require('../../assets/images/expand_less.png')}/>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:16,marginBottom:60}}>
            <Forecast/>
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
