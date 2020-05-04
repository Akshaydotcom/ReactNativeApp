import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

export default AskUsScreen = ({navigation}) =>{
    const [question, setQuestion]=useState('');
    const [emailId, setEmailId]=useState('');
    const addQuestion = enteredText =>{
        setQuestion(enteredText);
      };
    const addEmail = enteredText =>{
        setEmailId(enteredText);
    }
    return(
        <View style={styles.AskUsScreenRoot}>
            <Text>Ask Us</Text>
            <View >
            <Text style={styles.AskUsIntro}>Do you have any questions for us?</Text>
            <Text>Please feel free to ask.</Text>
            </View>
            <View style={styles.AskUsInputs}>
            <TextInput placeholder="Question" 
            value={question} 
            style={{color:"white"}}
            onChangeText={addQuestion}/>
            <TextInput placeholder="Your Email" 
            value={emailId} 
            style={{color:"white"}}
            onChangeText={addEmail}/>
            </View>
            <Button title="Home" onPress={()=>navigation.navigate('Home')}/>
            <Button title="Submit" onPress={()=>alert("Submitted Successfully!!")} />
        </View>
    );
}

const styles=StyleSheet.create({
    AskUsScreenRoot:{
        backgroundColor:"black",
        alignItems: "center",
        justifyContent:"space-between",
        padding:50,
        height:"100%"
    },
    AskUsIntro:{
        color:"red"
    },
    AskUsInputs:{
        color:"red",
        alignItems: "center",
        justifyContent:"space-between",
    }

})