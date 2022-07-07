// import { StatusBar } from 'expo-status-bar';
 import { StyleSheet, Text, View } from 'react-native';
import React  from 'react';
import Home from './SCREENS/home';
import StackNav from './routes/HomeStackNav'
//import des fonts 
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';

export default () => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
   
    
  });
  if(!fontsLoaded){
    return <AppLoading />
  }else{

    // return <Home /> : à partir de la stacknav on peut directement remplacer le header 
    
    return <StackNav/>
  }

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
