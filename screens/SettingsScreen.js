import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
        header: null
	}

	render(){
		return(
			<LinearGradient colors={['#ff9966','#cc4b4e']} style={{alignItems: 'center', borderRadius: 5,flex:1 }}>

			</LinearGradient>
			
		);
	}
}

