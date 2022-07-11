import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Connexion = (props) => {
    const handlePressConnexion = ()=>{
        props.navigation.navigate('Profile')
      

   }
   const hanlePressHome = ()=>{
    props.navigation.navigate('Home')
}

   
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Vous êtes sur la page d'inscription</Text>
        <Button title="Connexion" 
            onPress={handlePressConnexion} />
        <Text> - </Text>
        <Button title="Home" 
            onPress={hanlePressHome} />

    </View>
);
}

const styles = StyleSheet.create({
container:{
    backgroundColor: "lightblue", 
    flex:1, 
    justifyContent:"center", 
    alignItems:"center", 

}, 
text:{
    
}
})

export default Connection;
