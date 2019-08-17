import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const listy=[{tablet:'Valium',nos:'half',time:"After Breakfast",url:"https://images.rxlist.com/images/multum/001723925_pb.jpg"},
            {tablet:'Vicodin',nos:'2',time:"After Breakfast",url:"https://images.rxlist.com/images/multum/006033887_pb.jpg"},
            {tablet:'Aspirin',nos:'1',time:"After Lunch",url:"https://cdn-prod.medicalnewstoday.com/content/images/articles/161/161255/aspirin.jpg"},
            {tablet:'Ziagen',nos:'1/4',time:"After Lunch",url:"https://images.rxlist.com/images/multum/497020221_pb.jpg"},
            {tablet:'Accolate',nos:'1',time:"After Dinner",url:"https://images.rxlist.com/images/multum/551110625_pb.jpg"},
            {tablet:'Pricose',nos:'1/3',time:"After Dinner",url:"https://images.rxlist.com/images/multum/000540140_pb.jpg"},
            
            
]
export default class Schedule extends Component{
    render(){
        return(
            <View>
            {listy.map((tab)=>(
                <View style={{paddingTop:20}}>
                <Card style={{backgroundColor:'#F5FFFA',borderRadius:20,borderColor:'#ff9966'}}>
                    <Card.Title title={tab.tablet} subtitleStyle={{color:'#ff9966',fontSize:15}} subtitle="Stick to your schedule" titleStyle={{color:'#ff9966',fontSize:30}}/>
                    <Card.Content>
                         <Paragraph style={{color:'#ff9966',fontSize:15,fontWeight:'bold'}}>{tab.time}</Paragraph>
                         <Card.Cover style={{height:150,width:150,borderRadius:15,alignSelf:'s5auto'}} source={{ uri:tab.url}} />
                    </Card.Content>

                    <Card.Actions style={{paddingLeft:12}}>
                    <TouchableOpacity style={styles.button}><Text style={styles.texty}>Taken</Text></TouchableOpacity>
                    </Card.Actions>
                </Card>
                </View>
            ))}
            </View>
        );
    }

}

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
		backgroundColor:'#ff9966',
		paddingLeft:25,
		paddingRight:25,
		paddingTop:10,
		

		
	},
})


