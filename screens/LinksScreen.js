import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class LinksScreen extends React.Component {
	static navigationOptions = {
        header: null
	}
	
	render(){
		return (
			<LinearGradient colors={['#ff9966','#cc4b4e']} style={{ padding: 15, alignItems: 'center', borderRadius: 5,flex:1 }}>
			</LinearGradient>
		);
	}
		  
}

const styles = StyleSheet.create({
	container: {
    	flex: 1,
    	paddingTop: 15,
    	backgroundColor: '#fff',
  	},
});
