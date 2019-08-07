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

randomList=[
"8d0QmnAXgg",
"XpF9FLVlOM",
"KvmGitMQB4",
"QM0Cjx11C6",
"YXhDT08W32",
"YfEnqbZgub",
"g3NI1heOFj",
"V87fL2Nj95",
"WqRVt9z9qX",
"9tqhjkyuer",
"ZvfOKZSDU1",
"FntpwL3jgf",
"3BDv4UKuzf",
"lWDXkOx5AA",
"s0zkCQC3QI",
"3GB4lBnGFG",
"iBOqZb2CSV",
"u9GAN9hRor",
"hvjWlq4nXb",
"gAUUl0nqb5",
]

//import { MonoText } from '../components/StyledText';

export default class Home extends React.Component{
	static navigationOptions = {
        header: null
    }
	state={

	}

	render(){
		return(
			<LinearGradient colors={['#ff9966','#cc4b4e']} style={{alignItems: 'center',flex:1 }}>
				<View style={{flex:2,flexDirection: 'row'}}>
					<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
						<Image style={{height:120,width:120 ,borderRadius:10,borderWidth:3,borderColor:'white'}} source={{uri:"https://www.endocrinemds.com/wp-content/uploads/2015/05/karen.jpg"}}/>
					</View>

					<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
						<Text style={{fontSize:25,fontWeight:'bold', color:'white',justifyContent:'flex-start'}}>Doctor Karen</Text>
						
						<View>
							<TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Main')}>
                        		<Text style={styles.texto}>Message</Text>
                   			</TouchableOpacity>

							<TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Main')}>
                        		<Text style={styles.texto}>Call</Text>
                    		</TouchableOpacity>
						</View>
					</View>
				</View>

				<View style={{flex:3}}>
				<Text style={{fontSize:25,color:'white',justifyContent:'flex-start'}}>SCHEDULE</Text>
					<ScrollView contentContainerStyle={{flexDirection:"column"}} alwaysBounceVertical={false} showsVerticalScrollIndicator={false}>
						{randomList.map(element =>(     //style={{flex:3,flexGrow:1,backgroundColor:'black'}
							<Text style={styles.texty}>{element}</Text>
						))}
					</ScrollView>
				</View>
			</LinearGradient>
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