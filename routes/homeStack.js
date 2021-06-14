import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import Register from '../screens/register';
import Login from '../screens/login';
import Payment from "../screens/payment";
import Participate from "../screens/participate";
import Participate2 from "../screens/participate2"

const screens = {
    Home: {
        screen: Home
    },
    Register: {
        screen: Register
    },
    Login: {
        screen: Login
    },
    Payment: {
        screen: Payment
    },
    Participate: {
        screen: Participate
    },
    Participate2: {
        screen:Participate2
    }


}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);