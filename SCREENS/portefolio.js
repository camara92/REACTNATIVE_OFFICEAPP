import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Profile = (props) => {
    const hanlePress = ()=>{
        props.navigation.navigate('Photo')
       //navigation.push('Profile')

   }
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
        <Button title="Photo" 
            onPress={hanlePress} />

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

export default Profile;
