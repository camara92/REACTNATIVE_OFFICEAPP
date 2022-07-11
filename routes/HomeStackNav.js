import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'; 
import Home from '../SCREENS/home';
import Profile from '../SCREENS/portefolio';
import Photo from '../SCREENS/photo';
import Office from '../Office/Office';
import moment from 'moment';
import Inscription from '../Authentification/SignUp';
import LoginScreen from '../screens_1/LoginScreen';
import HomeScreen from '../screens_1/HomeScreen';
import MyProfil from '../Profiles.js/MyProfil';
// importer les ecrans 
//  const screens ={
//     Home:Home, 
//     Prolfile: Prolfile, 
//     Photo: Photo

//  }
// const [currentDate, SetCurrentDate]= useState(''); 
// useEffect(()=>{
  //const date = Date()//la date
  const today = Date();
const date = moment(today).format("DD/MM/YYYY");
//   SetCurrentDate(
//     date
//   )
//   //console.log("daouda "+date)
//  }, [])
const screens ={
    Home:{
        screen:Home, 
        navigationOptions: 
        {
            title: "Home" 
        }
    }, 
    Profile: {
        screen:Profile
    }, 
    Photo: {
        screen:Photo
    }, 
    Office: {
        screen:Office
    }, 
    Inscription:{
        screen:Inscription
    }, 
    LoginScreen:{
        screen: LoginScreen, 
        navigationOptions: 
        {
            title: "Inscription" 
        }
    }, 
    // Profile:{
    //     screen:MyProfil, 
    //     navigationOptions:
    //     {
    //         title: "Profile"
    //     }
    // }

 }
const StackNav= createStackNavigator(screens)
export default createAppContainer(StackNav)