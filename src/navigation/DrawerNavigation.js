import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import Utils from '../screens/UtilScreen';


/*const DrawerNavigation = createDrawerNavigator({
 {Home: {
     screen: HomeScreen
 }},
 {
     contentComponent: Utils
 }

})*/
const DrawerNavigation = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
    }},
    {
    initialRouteName: 'Home',
    contentComponent: Utils,
  });

export default createAppContainer(DrawerNavigation);