import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Photo = (props) => {
    const hanlePress = ()=>{
        // navigate permet d'aller vers n'importe quel ecran à un autre 
        // push que chaine de caractere
        //props.navigation.navigate('Home')
       //navigation.push('Portefolio')
        //    il retourne directement vers portefolio 
        //props.navigation.goBack()
        props.navigation.navigate("Home")


   }
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Photo</Text>
        {/* retour vers la home par exemple  */}
        <Button title="Retour vers La Home" 
            onPress={hanlePress} />
    </View>
);
}

const styles = StyleSheet.create({
container:{
    backgroundColor: "lightgreen", 
    flex:1, 
    justifyContent:"center", 
    alignItems:"center", 

}, 
text:{
    
}
})

export default Photo;
