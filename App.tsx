import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './src/components/screens/Home';
import Widgets from './src/components/screens/Widgets';
import Notification from './src/components/screens/Notification';
import ViewAllScreen from './src/components/screens/ViewAll';
import HomeD from './src/assets/images/home-dark.svg'
import HomeL from './src/assets/images/home-light.svg'
import WidgetL from './src/assets/images/widget-light.svg'
import WidgetD from './src/assets/images/widget-dark.svg'
import NotificationL from './src/assets/images/notifications-light.svg'
import NotificationD from './src/assets/images/notifications-dark.svg'

import React from 'react'


export default function App() {
  const Tab = createBottomTabNavigator();

  const HomeStack = createNativeStackNavigator();
  

  const HomeStackScreen=() =>{
    return (
      <HomeStack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <HomeStack.Screen name="HomeScreen" component={Home} />
        <HomeStack.Screen name="ViewAll" component={ViewAllScreen} />
      </HomeStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused,size }) => {
            if (route.name === 'Home') {
              return(
              focused? <HomeL/>:<HomeD/>
              )
            } else if (route.name === 'Widgets') {
              return(
              focused ? <WidgetL/>:<WidgetD/>
              )
            }
            else if (route.name === 'Notification') {
              return(
              focused? <NotificationL/>:<NotificationD/>
              )
            }
          },
          tabBarShowLabel:false,
          headerShown:false,
          tabBarStyle: { backgroundColor:"#080745",borderTopWidth:0,borderRadius:40,elevation:0,position:"absolute"},
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Widgets" component={Widgets} />
        <Tab.Screen name="Notification" component={Notification} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
