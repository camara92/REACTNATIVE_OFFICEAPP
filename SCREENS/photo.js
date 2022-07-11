import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";

// const image = "/assets/images/avatarprofile.jpg";
const Photo = (props) => {
  const hanlePress = () => {
    // navigate permet d'aller vers n'importe quel ecran à un autre
    // push que chaine de caractere
    //props.navigation.navigate('Home')
    //navigation.push('Portefolio')
    //    il retourne directement vers portefolio
    //props.navigation.goBack()
    props.navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photo</Text>
      {/* retour vers la home par exemple  */}
      {/* <Image source={require("https://picsum.photos/seed/picsum/200/300")} /> */}
      <Image 
        source={{ uri: "https://picsum.photos/seed/picsum/400/500" }}
        style={styles.imagesProfile}
      />
      <Button title="Retour vers La Home" onPress={hanlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
  imagesProfile:{
    width: 300, height: 200 , 
    margin:15, 

  }
});

export default Photo;
