import React from 'react';
import { Platform,Text} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SocialCircle from '../screens/SocialCircle';
import Mappy from '../screens/Map';
import Pedo from "../screens/Pedo"
import Scan from '../screens/Scan';
import Forum from '../screens/Forum';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";



export default createMaterialBottomTabNavigator({
  	Home: { 
		screen: HomeScreen,
		navigationOptions:{
			tabBarIcon:<TabBarIcon name='md-analytics' />,
		},
		
	},
  	Scan: { 
		screen: Scan,
		navigationOptions:{
			tabBarIcon:<TabBarIcon name='md-qr-scanner' />,
		}
	},
  	Forum: {
		screen: Forum,
		navigationOptions:{
			tabBarIcon:<TabBarIcon name='md-paw' />,
		}
	},
  	Map: {
		screen: Mappy,
		navigationOptions:{
			tabBarIcon:<TabBarIcon name='md-map' />,
		}
	},
	Steps:{
		screen:Pedo,
		navigationOptions:{
			tabBarIcon:<TabBarIcon name="md-heart" />
		}
	},
  	DM:{ 
		screen:SocialCircle,
		navigationOptions:{
			tabBarIcon:<TabBarIcon name='md-chatbubbles' />,

		}
	}
}, {
  initialRouteName: 'Home',
  activeColor: '#f0edf6',
  //labeled:'false',
  inactiveColor: '#3e2465',
  barStyle: { 
				backgroundColor: '#ff9966',
				height:65,
				
				
			},

});

// const config = Platform.select({
//   web: { headerMode: 'screen' },
//   default: {},
// });

// const HomeStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//   },
//   config
// );

// HomeStack.navigationOptions = {
//   tabBarLabel:<Text style={{color:'#7f2f31',textAlign:'center'}}>Home</Text>,
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-analytics'
//       }
//     />
//   ),
// };

// HomeStack.path = '';

// const LinksStack = createStackNavigator(
//   {
//     Links: SocialCircle,
//   },
//   config
// );

// LinksStack.navigationOptions = {
//   tabBarLabel:<Text style={{color:'#7f2f31',textAlign:'center'}}>SocialCircle</Text>,
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-people'} />
//   ),
// };



// LinksStack.path = '';

// const ForumStack = createStackNavigator(
//   {
//     Forum: Forum,
//   },
//   config
// );

// ForumStack.navigationOptions = {
//   tabBarLabel:<Text style={{color:'#7f2f31',textAlign:'center'}}>Forum</Text>,
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-paw'} />
//   ),
// };



// ForumStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: Scan,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: <Text style={{color:'#7f2f31',textAlign:'center'}}>Scan</Text>,
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-qr-scanner'} />
//   ),
// };

// SettingsStack.path = '';

// const MapStack = createStackNavigator(
//   {
//     Map: Mappy,
//   },
//   config
// );

// MapStack.navigationOptions = {
//   tabBarLabel: <Text style={{color:'#7f2f31',textAlign:'center'}}>Map</Text>,
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-map'} />
//   ),
// };

// MapStack.path = '';

// const tabNavigator = createBottomTabNavigator({
//   HomeStack,
//   LinksStack,
//   MapStack,
//   SettingsStack,
//   ForumStack,
// });

// tabNavigator.path = '';

// export default tabNavigator;
