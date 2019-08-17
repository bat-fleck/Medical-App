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
import Constants from 'expo';
import Card from './CardDr';
import Schedule from './CardSchedule';

//import { MonoText } from '../components/StyledText';

export default class Home extends React.Component{
	static navigationOptions = {
        header: null
    }
	state={

	}

	render(){
		return(
			<ScrollView style={{flex:1}}>
			<LinearGradient colors={['#FF69B4','#ff9966']} start={['0.9','0.5']} style={{flex:1 }}>
				
				
				<View style={{flex:1,paddingTop:30,paddingLeft:10}}>
					<Text style={{color:'white',fontWeight:'900',fontSize:30,}}>Contact Your Doctor</Text>
				</View>
				<View style={{flex:4,paddingTop:10,paddingLeft:10,paddingRight:15}} >
					<Card name="Dr Karen" image="https://www.endocrinemds.com/wp-content/uploads/2015/05/karen.jpg" phone="9995845590"/>

				</View>

				<View style={{flex:2,paddingTop:30,paddingLeft:10,paddingRight:10}}>
					<Text style={{color:'white',fontWeight:'900',fontSize:30,}}>Medication Schedule</Text>
				</View>

				<View style={{flex:2,paddingTop:10,paddingLeft:10,paddingRight:10}}>
					<Schedule/>
				</View>

				</LinearGradient>
				</ScrollView>

				
				// <View style={{flex:2,flexDirection: 'row'}}>
				// 	<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
				// 		<Image style={{height:120,width:120 ,borderRadius:10,borderWidth:3,borderColor:'white'}} source={{uri:"https://www.endocrinemds.com/wp-content/uploads/2015/05/karen.jpg"}}/>
				// 	</View>

				// 	<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
				// 		<Text style={{fontSize:25,fontWeight:'bold', color:'white',justifyContent:'flex-start'}}>Doctor Karen</Text>
						
				// 		<View>
				// 			<TouchableOpacity style={styles.button} onPress={()=>Linking.openURL("sms:+9995845590")}>
                //         		<Text style={styles.texto}>Message</Text>
                //    			</TouchableOpacity>

				// 			<TouchableOpacity style={styles.button} onPress={()=>Linking.openURL('tel:+9995845590')}>
                //         		<Text style={styles.texto}>Call</Text>
                //     		</TouchableOpacity>
				// 		</View>
				// 	</View>
				// </View>

				// <View style={{flex:3}}>
		
			
		);
	}

}

const styles=StyleSheet.create({
	texty:{
		fontSize:20,
		color:'white'
	},
	texto:{
		color:"#FFEAE0",
		alignSelf:'center',
		fontSize:20,
		fontWeight:'bold'
		// textShadowColor:'#ffcccc',
		// textShadowOffset:{width:2,height:2},
		// textShadowRadius:2,
    },
    button:{
		borderRadius:10,
		paddingBottom:10,
		borderColor:'#ffffff',
		borderWidth:2,
		backgroundColor:'transparent',
		paddingLeft:25,
		paddingRight:25,
		paddingTop:10,
		

		
	},
})