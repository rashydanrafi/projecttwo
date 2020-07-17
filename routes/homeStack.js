import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/logins';
import Register from '../screens/registers';
import Homepage from '../screens/homepages';
import QRpage from '../screens/qrpages';
import Scanpage from '../screens/scanpage';
import Itemlistpage from '../screens/itemlist';
import Confirmationpage from '../screens/confirmation';
import Topuppage from '../screens/topup';


const screens = {

    /*Login: {
    screen: Login
    },
    
    Register: {
        screen: Register
    }, 

    Homepage: {
        screen: Homepage
    }, 

    QRpage: {
      screen: QRpage
    }, 
    
    Scanpage: {
        screen: Scanpage
     }, */

     Itemlistpage: {
         screen: Itemlistpage
     },

     Confirmationpage: {
         screen: Confirmationpage
     },

     Topuppage:{
         screen: Topuppage
     },

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);