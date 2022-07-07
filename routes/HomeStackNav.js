import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'; 
import Home from '../SCREENS/home';
import Portefolio from '../SCREENS/portefolio';
import Photo from '../SCREENS/photo';
import Office from '../Office/Office';
import moment from 'moment';


// importer les ecrans 
//  const screens ={
//     Home:Home, 
//     Portefolio: Portefolio, 
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
    Portefolio: {
        screen:Portefolio
    }, 
    Photo: {
        screen:Photo
    }, 
    Office: {
        screen:Office
    }

 }
const StackNav= createStackNavigator(screens)
export default createAppContainer(StackNav)