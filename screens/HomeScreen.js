import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//import { MonoText } from '../components/StyledText';

export default class Home extends React.Component{
	static navigationOptions = {
        header: null
    }
	state={

	}

	render(){
		return(
			<LinearGradient colors={['#ff9966','#cc4b4e']} style={{alignItems: 'center', borderRadius: 5,flex:1 }}>
				<ScrollView contentContainerStyle={{flex:1}}>


				</ScrollView>
			</LinearGradient>
		);
	}

}