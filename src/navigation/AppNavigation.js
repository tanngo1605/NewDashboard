import React from 'react';
import SchoolCodeScreen from '../screens/SchoolCodeSreen';
import LoginScreen from '../screens/LoginSreen';
import HomeScreen from '../screens/HomeScreen';
import DashBoardScreen from '../screens/DashBoardScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'

const AppNavigator = createStackNavigator({
    Code: SchoolCodeScreen,
    Login: LoginScreen,
   DashBoard: DashBoardScreen

})

export default createAppContainer(AppNavigator);


