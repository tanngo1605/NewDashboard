import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';



const DrawerNavigation = createDrawerNavigator({
    Utils,

})

export default createAppContainer(DrawerNavigation);