import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import DepressionInfoScreen from '../screens/DepressionInfoScreen';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions: {
      drawerIcon: <Icon name = "home" type = 'fontawesome5'/>,
    }
    },
    DepressionInfoScreen : {
    screen : DepressionInfoScreen,
    navigationOptions: {
      drawerIcon: <Icon name = "bell" type = 'font-awesome'/>,
    }
  },
},
  {
  },
  {
    initialRouteName : 'Home'
  })