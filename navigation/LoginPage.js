import React, { Component } from 'react';
import { View, Text,TouchableOpacity,TextInput,StyleSheet,KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <LinearGradient colors={['#ff9966','#cc4b4e']} style={{ padding: 15, alignItems: 'center', borderRadius: 5,flex:1 }}>

                <View style={{flex:6,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white',fontSize:35}}>LIGMA</Text> 
                </View>

                
                <KeyboardAvoidingView behavior='padding' style={{flex:5,alignItems:'center',justifyContent:'flex-start'}}>
                    <View style={{paddingBottom:15}}>   
                        <TextInput style={styles.input} placeholder="Enter your UserName"/>
                    </View>

                    <View style={{paddingBottom:15}}>
                        <TextInput keyboardType='visible-password' style={[styles.input]} placeholder="Enter your Password"/>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Main')}>
                        <Text style={styles.texty}>Login</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
                
            </LinearGradient>
            

      
        );
    }
}

const styles=StyleSheet.create({
    input:{
        borderRadius:10,
		paddingBottom:10,
		borderColor:'#ffffff',
		borderWidth:2,
		backgroundColor:'transparent',
		paddingLeft:25,
		paddingRight:25,
        paddingTop:10,
        fontSize:25,
        color:'white'
    },
    texty:{
		color:"#cc4b4e",
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
		backgroundColor:'#ffffff',
		paddingLeft:25,
		paddingRight:25,
		paddingTop:10,
		

		
	},
})
{/* <Text
                    style={{
                    backgroundColor: 'transparent',
                    fontSize: 15,
                    color: '#fff',
                    }}>
                LOGIN
                </Text> */}
