import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    TouchableHighlight,
    View,
  } from 'react-native';
  import Location from '../../assets/images/location-gps.svg'
  import Temp from '../../assets/images/thermostat.svg'
  import Wind from '../../assets/images/wind.svg'
  import Humidity from '../../assets/images/humidity.svg'
  import moment from 'moment';


export default function Home({ navigation }) {

  const [w_today,setW_today]=useState([
    {
      id:1,
      temp:"32°",
      time:"14:00",
      Image:require('../../assets/images/rainy-cloud.png'),
    },
    {
      id:2,
      temp:"30°",
      time:"15:00",
      Image:require('../../assets/images/rain.png'),
    },
    {
      id:3,
      temp:"30°",
      time:"16:00",
      Image:require('../../assets/images/lighting.png'),
    },
    {
      id:4,
      temp:"34°",
      time:"17:00",
      Image:require('../../assets/images/thunder.png'),
    },
    {
      id:5,
      temp:"26°",
      time:"18:00",
      Image:require('../../assets/images/snow.png'),
    }
  ])

  var touchProps = {
    activeOpacity: 1,
    underlayColor: "#075B94",                               
    onPress: () => console.log('HELLO'),                 
  };

  const GetCurrentDate=()=>{
    var date = moment()
      .utcOffset('+05:30')
      .format('MMMM DD, hh:mmA');
    return date;
}

  return (
    <SafeAreaView style={{flex:1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient colors={['#075B94', '#080745',]} style={styles.linearGradient}>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"flex-end",width:"100%"}}>
            <Text style={{fontSize:24,color:"#fff",fontFamily:"Gordita-Medium"}}>Kochi,Kerala</Text>
            <TouchableOpacity>
              <Location width={24} height={24} style={{marginLeft:88}}/>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{color:"#fff",marginTop:10,fontFamily:"Gordita-Regular",textAlign:"center"}}><GetCurrentDate/></Text>
          </View>
          <View style={{alignItems:"center"}}><Image source={require('../../assets/images/rainy-cloud.png')} style={{width:300,height:300,marginTop:20}} /></View>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",width:"100%",marginTop:20}}>
            <View style={{alignItems:"center"}}>
                <View style={styles.align}>
                  <Text style={{color:"#999",fontSize:16,fontFamily:"Gordita-Regular"}}>Temp</Text>
                  <Temp/>
                </View>
                <Text style={{color:"#fff",fontSize:16,fontFamily:"Gordita-Medium",marginTop:2}}>28°</Text>
            </View>
            <View style={{alignItems:"center"}}>
                <View style={styles.align}>
                  <Text style={{color:"#999",fontSize:16,fontFamily:"Gordita-Regular"}}>Wind</Text>
                  <Wind/>
                </View>
                <Text style={{color:"#fff",fontSize:16,fontFamily:"Gordita-Medium",marginTop:2}}>7.90 km/h</Text>
            </View>
            <View style={{alignItems:"center"}}>
                <View style={styles.align}>
                  <Text style={{color:"#999",fontSize:16,fontFamily:"Gordita-Regular"}}>Humidity</Text>
                  <Humidity/>
                </View>
                <Text style={{color:"#fff",fontSize:16,fontFamily:"Gordita-Medium",marginTop:2}}>84%</Text>
            </View>
          </View>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",marginTop:40,marginBottom:20}}>
            <Text style={{color:"#fff",fontFamily:"Gordita-Medium",fontSize:26}}>Today</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ViewAll',{
            param: w_today,
          })}><Text style={{color:"#075B94"}}>view all</Text></TouchableOpacity>
          </View>
          <View>
            <FlatList horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item)=>item.id.toString()}
              data={w_today}
              renderItem={(item,index) => (
                <TouchableHighlight  {...touchProps}   key={item.item.id} style={{borderRadius:20,marginRight:10,backgroundColor:"rgba(0,0,0,0.3)"}}>
                  <View  style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:16}}>
                    <Image source={item.item.Image} style={{width:60,height:60,marginRight:10}} />
                    <View>
                      <Text style={{color:"#fff",fontFamily:"Gordita-Regular",fontSize:18}}>{item.item.time}</Text>
                      <Text style={{color:"#fff",fontFamily:"Gordita-Medium",fontSize:20,marginTop:10}}>{item.item.temp}</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              )}
            />
          </View>
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
  align:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around"
  }
})
