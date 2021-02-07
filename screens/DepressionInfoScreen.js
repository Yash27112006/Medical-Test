import * as React from 'react';
import {Text,View, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView,
ScrollView, Modal} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import {Header} from 'react-native-elements';

export default class DepressionInfoScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            isModalVisible: false
        }
    }
   
    showModal1 = ()=>{
        return(
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.isModalVisible}
          >
          <View style={styles.modalContainer}>
            <ScrollView style={{width:'100%'}}>
              <Text
                style={styles.modalTitle}
                >About Depression</Text>
              <Text>What is Depression?
Depression is a persistent mood disorder that affects the way we feel, think, and act; you may experience anxiety, stress, or saddening thoughts with depression. Depression is mainly characterized by profound sadness, lack of motivation, feelings of worthlessness, and loss of interest in pleasurable activities. These are the characteristics that this quiz is testing for. However, this quiz may not be all encompassing, and other aspects of your life may be affecting your depression symptoms and mental health, that this quiz may not be testing for.
As you can probably imagine, depression disorders can impact our personal and professional life profoundly, leading to social isolation, relationship issues, and even medical complications, many people have trouble sleeping with depression. However, with the necessary information and treatment, people with depression can live productive healthy lifestyles with a diagnosis. There are many options for treatment, including therapy, medication, group therapy, and online therapy, each of these may help alleviate symptoms of depression.
Depression and anxiety have a lot in common, which is why it’s relatively easy – especially for laypeople – to confuse them. They are the two most common mental health or mood disorders that mental health professionals diagnose. Furthermore, depression and anxiety can co-occur, with overlapping symptoms that make it even more difficult for clinicians to separate them. People with anxiety and depression both may voice similar symptoms, like difficulty sleeping, poor mood, lack of energy, and anxious thoughts. However, this quiz tests for the differences in depression and anxiety.
While depression involves persistent sadness and the tendency to ruminate on past events and thoughts, anxiety generates restlessness and persistent worrying.
But to understand why depression can have a devastating impact on our everyday life, we need to look at the signs and symptoms.

Signs of Depression
DEPRESSION SYMPTOMS CAN VARY IN INTENSITY, CHANGE HOW YOU FEEL, DICTATE WHAT YOU EAT, WHAT YOU DO, OR WHO YOU SEE, AND MAY FEEL OVERWHELMING. WHETHER IT IS THE THOUGHTS, MOOD, OR FEELING THAT MAKES YOU QUESTION WHETHER OR NOT YOU HAVE DEPRESSION, IT IS IMPORTANT THAT YOU TAKE CARE OF YOUR MENTAL HEALTH. WHAT ONE PERSON WILL FEEL MAY BE DIFFERENT FROM ANOTHER PERSON'S EXPERIENCE WITH DEPRESSION. HOW TO TREAT EACH OF THESE SYMPTOMS MAY CHANGE FROM PERSON TO PERSON AS WELL. THIS QUIZ TESTS WHAT YOU MAY BE EXPERIENCING WITH DEPRESSION, BUT OTHER GENERAL SYMPTOMS CAN INCLUDE:
•	Persistent sadness
•	Ruminative thoughts
•	Lack of motivation
•	Lack of focus
•	Physical and mental exhaustion, feeling tired
•	Loss of interest in hobbies and pleasurable activities
•	A significant decline in work/academic performance
•	Difficulty in making decisions
•	Feelings of worthlessness and helplessness
•	Feelings of guilt and shame
</Text>
<View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={()=>this.setState({"isModalVisible":false})}
                >
                <Text style={{color:'#ff5722'}}>Close</Text>
                </TouchableOpacity>
              </View>
              </ScrollView>
              </View>
              </Modal>
              
              )}
    render(){
        return(
          <View>
              <Text>DEPRESSION</Text>
              <Text>This is a 9-question test for diagnosing, </Text>
              <Text>monitoring, and measuring the severity of depression.</Text>
              <TouchableOpacity>
                   <Text>Take Test</Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>this.setState({ isModalVisible:true})}>
                  <Text>About it</Text>
              </TouchableOpacity>
          </View>
        )
    }
}