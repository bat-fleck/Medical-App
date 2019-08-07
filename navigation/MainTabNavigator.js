import React from 'react';
import { Platform,Text} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SocialCircle from '../screens/SocialCircle';
import Mappy from '../screens/Map';
import Scan from '../screens/Scan';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel:<Text style={{color:'#7f2f31',textAlign:'center'}}>Home</Text>,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-analytics'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: SocialCircle,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel:<Text style={{color:'#7f2f31',textAlign:'center'}}>SocialCircle</Text>,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-people'} />
  ),
};



LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: Scan,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: <Text style={{color:'#7f2f31',textAlign:'center'}}>Scan</Text>,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-qr-scanner'} />
  ),
};

SettingsStack.path = '';

const MapStack = createStackNavigator(
  {
    Map: Mappy,
  },
  config
);

MapStack.navigationOptions = {
  tabBarLabel: <Text style={{color:'#7f2f31',textAlign:'center'}}>Map</Text>,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-map'} />
  ),
};

MapStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  MapStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
