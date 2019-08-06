import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginPage from './LoginPage';

export default createAppContainer(
	createSwitchNavigator(
		{
			Login:LoginPage,
			Main: MainTabNavigator,
		},
		{
			initialRouteName: 'Login',
		})
);

