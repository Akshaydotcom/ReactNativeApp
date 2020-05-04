import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function HomeScreen({navigation}){
        const [DataSource, setDataSource]=useState(null);
        const [quotesCollection, setQuotesCollection]=useState([]);
        useEffect(()=>{
                fetch("https://quotes.rest/qod?language=en").then( (response) => 
                response.json()).then((response)=>console.log(response.contents.quotes[0].quote));
        },[])

   

        return(
            <View style={style.HomeScreenRoot}>
                <Text style={style.QuoteText}> Hi</Text>

        <Text style={style.QuoteAuthorText}>Hello</Text>
                <View style={{flexDirection:"row", justifyContent:"space-between", width:"100%"}}>
                <Button title="FAQ" onPress={()=>navigation.navigate('FAQMainScreen')} />
                <Button title="Ask Us" onPress={()=>navigation.navigate('Ask Us')}/>
                </View>
            </View>

        );
}

const style=StyleSheet.create({
    HomeScreenRoot:{
        backgroundColor:"black",
        alignItems: "center",
        justifyContent:"space-between",
        padding:50,
        height:"100%"
    },
    QuoteText:{
        color:"red",
        fontStyle:"italic",
    },
    QuoteAuthorText:{
        color:"red",
        fontStyle:"normal",
        fontWeight:"bold"
    }
})