import { StyleSheet, Text, KeyboardAvoidingView, View, TextInput, Button, placeholder } from 'react-native'
import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native';
//import {auth } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js"
//import { auth } from '../firebase'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; 
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../firebase-config';
const Login = () => {
  const [email, setEmail ]= useState('')
  const [password, setPassword ]= useState('') 
  const app = initializeApp(firebaseConfig); 
  const auth = getAuth(app); 


    // 
    const handleSignUp = () =>{
        // auth
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials =>{
          console.log(user)
            const user= userCredentials.user; 
            console.log(user.email); 
        })
        .catch(error =>alert(error.message))
    }

    // login 
    const handleSignIn = ()=> {
      signInWithEmailAndPassword(auth, email, password)
      .then(()=>{
       
        console.log('Vous êtes connecté. Bienvenue dans votre compte affluence. ')
        const user = userCredentials.user; 
        console.log(user)
      })
      .catch(error =>{
        console.log(error)

      })
    }
  return (
    <KeyboardAvoidingView style={styles.container}
    behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput 
            placeholder='Email'
            value={email}
            onChangeText={text=>setEmail(text)}
            style={styles.input }
            secureTextEntry

        />
          <TextInput 
            placeholder='Password'
            value={password}
            onChangeText={text=>setPassword(text)}
            style={styles.input }
            secureTextEntry

        />

      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity 
        // onPress={()=>{}}
        onPress={handleSignIn}
        style={styles.button}
      
      >
      <Text style={styles.buttonText}>Se connecter </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={handleSignUp}
        style={[styles.button, styles.buttonOutline]}
      >
      {/* <Text style={styles.buttonOutlineText}>Register  </Text> */}
      <Text style={styles.buttonOutlineText}>S'inscrire  </Text>

      </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:"center", 
        alignItems: "center", 
        backgroundColor:"lightblue"
        
    }, 
    inputContainer:{
        width:"80%"
    }, 
    input:{
        backgroundColor: "white", 
        paddingHorizontal: 15, 
        paddingVertical:10, 
        borderRadius:10, 
        marginTop:5, 
    }, 
    buttonContainer:{
        width:"60%", 
        justifyContent:"center", 
        alignItems: "center", 
        marginTop:40, 
       
    },
    buttonText:{
        color: "white", 
        fontWeight:"700", 
        fontSize:16, 
        
        


    }, 
    button:{
        backgroundColor:"#0782F9", 
        width: '100%', 
        padding:15, 
        borderRadius:10, 
        alignItems:"center", 
       
        

    }, 
    buttonOutline:{
        backgroundColor: "white", 
        marginTop:5, 
        borderColor: "0782F9", 
        borderWidth:2
    }
    ,
    buttonOutlineText:{
        color: "lightblue", 
        fontWeight:"700", 
        fontSize:16, 
    }
})