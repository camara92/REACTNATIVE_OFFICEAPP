import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button } from 'react-native';
import moment from "moment";
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
    const hanlePress = ()=>{
        //  navigation.navigate('Portefolio')
        navigation.navigate({routeName: "Portefolio"})
        //navigation.push('Portefolio')

    }
    // page de réservation bureau example de myoffice 
    const hanlePressOffice = ()=>{
        //  navigation.navigate('Portefolio')
        navigation.navigate({routeName: "Office"})
        //navigation.push('Portefolio')

    }

    // fin de code office de bureau progrmini 
    // page inscription 
    const hanleSignUp = ()=>{
        //  navigation.navigate('Portefolio')
        navigation.navigate({routeName: "Inscription"})
        //navigation.push('Portefolio')

    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Date du jour : { currentDate } </Text>
            <Text style={styles.messageWelcole}>Bienvenue chez votre Office : plus de flexibilité et d'organisation. 
            Ceci est une application à titre apprentissage rapide du langage 
            react native en créant une sorte d'application de réservation des salles dans nitre offiche. 
            Welcome To progrmini!  </Text>
           <View style={styles.boutonnav}>
           <Text>🕸️</Text>
            <Button  title="Portefolio" 
            onPress={hanlePress} />
            {/* bouton de navigation pour la réservation  */}
            <Text>🕸️</Text>
            <Button style={styles.boutonnav} title="Office" 
            onPress={hanlePressOffice} />
            {/* bouton inscripption  */}
            <Text>🕸️</Text>
            <Button style={styles.boutonnav} title="Inscription" 
            onPress={hanleSignUp} />
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
       


    }, 
    text:{
        fontWeight:"bold"
    }, 
    boutonnav:{
        
        backgroundColor: "lightblue", 
        textAlign:"center"
    }, 
    messageWelcole: {
        textAlign:"center", 
        marginTop: 40
    }
   
})

export default Home;
