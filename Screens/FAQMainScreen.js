import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback, Button} from 'react-native';

export default FAQMainScreen = ({navigation}) => {
    return(
        <View style={styles.FAQMainScreenRoot}>
            <Text style={styles.header}>FAQ</Text>
            <View>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate("FAQScreen1")}>
                    <Text style={styles.question}>What is the purpose of this app?</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate("FAQScreen2")}>
                    <Text style={styles.question}>Why am I seeing these quotes at random time?</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate("FAQScreen3")}>
                    <Text style={styles.question}>Why am I seeing only 1 quote at a time?</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate("FAQScreen4")}>
                    <Text style={styles.question}>Can I save the quote?</Text>
                </TouchableWithoutFeedback>
            </View>
            <Button title="About" onPress={()=>navigation.navigate("About")}/>
        </View>
    );
}

const styles=StyleSheet.create({
    FAQMainScreenRoot:{
        backgroundColor:"black",
        color:"yellow",
        flexDirection:"column",
        justifyContent:"space-between",
        height:"100%",
    },
    header:{
        color:"yellow",
        fontWeight:"bold",
        fontSize:15
    },
    question:{
        color:"yellow",
        fontWeight:"normal",
        fontSize:13
    }
    
})