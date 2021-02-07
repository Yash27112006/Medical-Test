import * as React from 'react';
import {Text,View, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView,
ScrollView, Modal} from 'react-native';
import firebase from 'firebase';
import {Header} from 'react-native-elements';

export default class TestsScreen extends React.Component{
    moveToDepression = () =>{
        this.props.navigation.navigate('DepressionInfoScreen');
        console.log("Moving to Depression");
    }
    render(){
        return(
            <View>
                <TouchableOpacity onPress = {() =>{this.moveToDepression()}}>
                    <Text>Depression</Text>
                </TouchableOpacity>
            </View>
        )
    }
}