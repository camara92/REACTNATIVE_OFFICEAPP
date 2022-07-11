import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button } from 'react-native';
import moment from "moment";
import Login from '../screens_1/LoginScreen';
const Home = ({ navigation }) => {
    // date à l'affiche 
    const [currentDate, SetCurrentDate]= useState(''); 
    useEffect(()=>{
      //const date = Date()//la date
      const today = Date();
    const date = moment(today).format("DD/MM/YYYY");
      SetCurrentDate(
        date
      )
      //console.log("daouda "+date)
     }, [])

    // console.log(props); 
    const handlePress = ()=>{
        //  navigation.navigate('Portefolio')
        navigation.navigate({routeName: "Profile"})
        //navigation.push('Portefolio')

    }
    // page de réservation bureau example de myoffice 
    const handlePressOffice = ()=>{
        //  navigation.navigate('Portefolio')
        navigation.navigate({routeName: "Office"})
        //navigation.push('Portefolio')

    }
    const WelcomeMessage= ("Bienvenue ")
    // fin de code office de bureau progrmini 
    // page inscription 
    const handleSignUp = ()=>{
        //  navigation.navigate('Portefolio')
        navigation.navigate({routeName: "Inscription"})
        //navigation.push('Portefolio')

    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Date du jour : { currentDate } </Text>

            {/* <Text> {messageBienvenue} </Text> */}
            <Text style={styles.messageWelcole}>Bienvenue chez votre Office : plus de flexibilité et d'organisation. 
            Ceci est une application à titre apprentissage rapide du langage 
            react native en créant une sorte d'application de réservation des salles dans notre offiche. 
             </Text>
           <View style={styles.boutonnav}>
           <Text>🕸️</Text>
            <Button  title="Profile" 
            onPress={handlePress} />
            {/* bouton de navigation pour la réservation  */}
            <Text>🕸️</Text>
            <Button style={styles.boutonnav} title="Office" 
            onPress={handlePressOffice} />
            {/* bouton inscripption  */}
            <Text>🕸️</Text>
            <Button style={styles.boutonnav} title="Inscription" 
            onPress={handleSignUp} />
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "lightblue", 
        flex:1, 
        justifyContent:"center", 
        alignItems:"center", 
        fontFamily: "Inter_900Black",
        margin: 25,
      
       


    }, 
    text:{
        fontWeight:"bold"
    }, 
    boutonnav:{
        
        backgroundColor: "light", 
        textAlign:"center", 
        margin: 25,
        width:"90%",
        
    }, 
    messageWelcole: {
        textAlign:"center", 
        marginTop: 40, 
        margin:25, 
    }
   
})

export default Home;
