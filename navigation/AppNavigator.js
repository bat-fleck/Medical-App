import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginPage from './LoginPage';
import Donut from '../screens/Donut'

export default createAppContainer(
	createSwitchNavigator(
		{
			Login:LoginPage,
			Main: MainTabNavigator,
			Donut:Donut,
		},
		{
			initialRouteName: 'Login',
		})
);

