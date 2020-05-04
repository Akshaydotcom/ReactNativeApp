import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';


export default FAQScreen4 = ({navigation}) => {
    return(
        <View style={styles.FAQScreenRoot}>
            <Text style={styles.question}>Can I save the quote?</Text>
            <Text style={styles.Answer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc bibendum faucibus felis et venenatis. Ut dapibus leo eget ultrices pretium. 
                    Sed commodo, turpis quis scelerisque tincidunt, tellus nunc volutpat libero, 
                    et porta mauris risus eget nunc. Duis ornare volutpat quam ac viverra. 
                    Proin vulputate pretium eros. Morbi quis sapien libero.</Text>
            <Button title="FAQ" onPress={()=>navigation.navigate('FAQMainScreen')}/>
        </View>
    );
}

const styles=StyleSheet.create({
    FAQScreenRoot:{
        backgroundColor:"black",
        color:"yellow",
        flexDirection:"column",
        justifyContent:"space-between",
        height:"100%",
    },
    question:{
        color:"yellow",
        fontWeight:"bold",
        fontSize:15
    },
    Answer:{
        color:"yellow",
        fontWeight:"normal",
        fontSize:13
    }
    
})