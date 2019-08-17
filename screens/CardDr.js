import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import { Linking } from 'react-native';

import { createDownloadResumable } from 'expo-file-system';

const Cardy = (props) => (
    <Card style={{backgroundColor:'#F5FFFA',borderRadius:20,borderColor:'#ff9966'}}>
        <Card.Title titleStyle={{color:'#FF69B4',fontSize:30}} title={props.name} subtitleStyle={{color:'#FF69B4',fontSize:15}} subtitle="Get in touch with your Doctor."/>
        <Card.Content style={{flexDirection:'row'}}>
            <Card.Cover style={{height:150,width:150,borderRadius:15,alignSelf:'auto'}} source={{ uri:props.image}} />
        </Card.Content>  
        <Card.Actions style={{paddingLeft:10}}>
        <TouchableOpacity style={styles.button} onPress={()=>Linking.openURL('tel:+9995845590')}><Text style={styles.texty}>Call</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>Linking.openURL("sms:+9995845590")}><Text style={styles.texty}>Message</Text></TouchableOpacity>
        </Card.Actions>
    </Card>
);



  const styles=StyleSheet.create({
	texty:{
		fontSize:20,
        color:'white',
        textShadowColor:'#D8BFD8',
        fontWeight:'200',
        textShadowRadius:5,
    
	},
    button:{
		borderRadius:10,
		paddingBottom:10,
		borderColor:'#ffffff',
		borderWidth:2,
		backgroundColor:'#FF69B4',
		paddingLeft:25,
		paddingRight:25,
		paddingTop:10,
		

		
	},
})

export default Cardy;
