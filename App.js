import React from 'react';
import HomeScreen from './Screens/homeScreen';
import AskUsScreen from './Screens/AskUsScreen';
import FAQMainScreen from './Screens/FAQMainScreen';
import FAQScreen1 from './Screens/FAQScreen1';
import FAQScreen2 from './Screens/FAQScreen2';
import FAQScreen3 from './Screens/FAQScreen3';
import FAQScreen4 from './Screens/FAQScreen4';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Ask Us" component={AskUsScreen}></Stack.Screen>
            <Stack.Screen name="FAQMainScreen" component={FAQMainScreen}></Stack.Screen>
            <Stack.Screen name="FAQScreen1" component={FAQScreen1}></Stack.Screen>
            <Stack.Screen name="FAQScreen2" component={FAQScreen2}></Stack.Screen>
            <Stack.Screen name="FAQScreen3" component={FAQScreen3}></Stack.Screen>
            <Stack.Screen name="FAQScreen4" component={FAQScreen4}></Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>
    );
}


