import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TestsScreen from '../screens/TestsScreen';
import RequestScreen from '../screens/RequestScreen';
import { AppStackNavigator } from './AppStackNavigator';


export const AppTabNavigator = createBottomTabNavigator({
  TestsScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/icon1.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Take Tests",
    }
  },
  ItemRequest: {
    screen: RequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/icon2.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Item Request",
    }
  }
});