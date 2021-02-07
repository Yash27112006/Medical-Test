import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import DepressionInfoScreen from '../screens/DepressionInfoScreen';
import AnxietyInfoScreen from '../screens/AnxietyScreen/AnxietyInfoScreen';


export const AppStackNavigator = createStackNavigator({
    DepressionInfoScreen :{
        screen : DepressionInfoScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    AnxietyInfoScreen:{
        screen:AnxietyInfoScreen,
        navigationOptions:{
            headerShown:false
        }
    },
},
{
    initialRouteName:'DepressionInfoScreen'
}

);