import React from 'react';
import SchoolCodeScreen from '../screens/SchoolCodeSreen';
import LoginScreen from '../screens/LoginSreen';
import HomeScreen from '../screens/HomeScreen';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'

const AppNavigator = createStackNavigator({
    Code: SchoolCodeScreen,
    Login: LoginScreen,
    Home: HomeScreen

})

export default createAppContainer(AppNavigator);


