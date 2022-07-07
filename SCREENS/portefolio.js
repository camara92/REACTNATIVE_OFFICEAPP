import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Portefolio = (props) => {
    const hanlePress = ()=>{
        props.navigation.navigate('Photo')
       //navigation.push('Portefolio')

   }
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Portefolio</Text>
        <Button title="Photo" 
            onPress={hanlePress} />

    </View>
);
}

const styles = StyleSheet.create({
container:{
    backgroundColor: "orange", 
    flex:1, 
    justifyContent:"center", 
    alignItems:"center", 

}, 
text:{
    
}
})

export default Portefolio;
