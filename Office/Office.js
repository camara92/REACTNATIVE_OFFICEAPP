import { StyleSheet, Text, View, KeyboardAvoidingView, placeholder, Keyboard, FlatList } from 'react-native';
import { TextInput, TouchableOpacity, Platform} from 'react-native';
import react, {useState, useEffect} from 'react';
import moment from "moment";
import { ScrollView } from 'react-native';
import Task from './Task';
import { SafeAreaView } from 'react-native';
export default function App() {
    // code de navigation 
    const Office = (props) => {
        const hanlePress = ()=>{
            props.navigation.navigate('Photo')
           //navigation.push('Office')
    
       }
        return (
            <View style={styles.container}>
            <Text style={styles.text}>Office</Text>
            <Button title="Photo" 
                onPress={hanlePress} />
    
        </View>
    );
    }

    // fin de navigation for office 
    const [currentDate, SetCurrentDate]= useState(''); 
    useEffect(()=>{
      //const date = Date()//la date
      const today = Date();
    const date = moment(today).format("MMMM D, YYYY");
      SetCurrentDate(
        date
      )
      //console.log("daouda "+date)
     }, [])
      // obj en dur 
      const obj = [
        {
          id: "1", name: "Bureau 1" }, 
        {
          id: "2", name: "Bureau 2"  }, 
        {
          id: "3", name: "Bureau 3"}, 
        {
          id: "4", name: "Bureau 4"   },  {
          id: "5", name: "Bureau 5" }, 
        {
          id: "6", name: "Bureau 6"  }, 
        {
          id: "7", name: "Salle de reunion" 
        },
        
         
        
      ]
      if(obj.id==1){
        console.log("Bien");
      }
      const [family, setFamily] = useState(obj);
     // console.log(family); 
    //  ScrollView39 : affichage totale verticale 
    // flatlist est plus performant que le scrollview 
    // intéret en cas de des datas qui sont largemnt bcp 
    const renderItem =({item})=> 
     
      (
        <View>
         
    
        
        <View  style={styles.viewlist}>
        
          <Text style={styles.text}> 
            <Text style={styles.textbold}>Nom de bureau : </Text>
           {item.name}</Text>
        </View>
         
        </View>
      )
    
      return (
        <View style={styles.wrapper}>
        <View style={styles.dateView}>
                       <Text style={styles.textDate}> {currentDate} </Text>
                    </View>
          <FlatList 
          data={family}
          renderItem={renderItem}
          keyextrractor={item=> item.id} 
        />
        
        </View>
      );
}

const styles = StyleSheet.create({
    wrapper:{
     padding: 20, 
     backgroundColor: "lightblue"
   
    }, 
    viewlist:{
     marginTop: 30, 
     backgroundColor: "grey", 
     padding: 19, 
    
    }
    , 
    text:{
     color: "white", 
     fontSize:20, 
     textAlign:"center", 
    }, 
    textbold:{
     fontWeight: "bold"
    }, 
    textDate:{
   
     textAlign: "center", 
     fontSize: 15, 
     fontWeight:"bold",
     marginTop: 35, 
   } , 
   dateView:{
    
    
     textAlign: "center", 
     padding: 25
   }, 
   // styles appbar 
   bottom: {
     position: 'absolute',
     left: 0,
     right: 0,
     bottom: 0,
   },
   });
