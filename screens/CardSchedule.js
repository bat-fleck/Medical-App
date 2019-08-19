import React, { Component } from 'react';
import { View,Text,Vibration,StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native';
import { Avatar,  Card, Title, Paragraph} from 'react-native-paper';
import {
    PieChart,
  } from 'react-native-chart-kit'
//import { variableDeclaration } from '@babel/types';
//import console = require('console');

const listy=["https://images.rxlist.com/images/multum/001723925_pb.jpg",
            "https://images.rxlist.com/images/multum/006033887_pb.jpg",
            "https://cdn-prod.medicalnewstoday.com/content/images/articles/161/161255/aspirin.jpg",
            "https://images.rxlist.com/images/multum/497020221_pb.jpg",
            "https://images.rxlist.com/images/multum/551110625_pb.jpg",
            "https://images.rxlist.com/images/multum/000540140_pb.jpg",
            "https://images.rxlist.com/images/multum/001723925_pb.jpg",
            "https://images.rxlist.com/images/multum/006033887_pb.jpg",
]




export default class Schedule extends Component{
    state={
        listBoi:null,
        key:1
    
        
    }
    async componentDidMount(){
       
        const data=await fetch("http://192.168.43.141:8000/medicine/")
        const jsony=await data.json()
        console.log(jsony)
        console.log(listy)
        this.setState({
            listBoi:jsony
        })
    }

    onRefresh=async ()=>{
        const data=await fetch("http://192.168.43.141:8000/medicine/")
        const jsony=await data.json()
        console.log(jsony)
        console.log(listy)
        this.setState({
            listBoi:jsony
        })
        
    }


    render(){
        if(this.state.listBoi)
        return(
            <View>
            {this.state.listBoi.map((tab,key)=>(
                <View style={{paddingTop:20}} key={key}>
                   
                <Card style={{backgroundColor:'#F5FFFA',borderRadius:20,borderBottomLeftRadius:0,borderBottomRightRadius:0, borderColor:'#ff9966'}}>
                    <Card.Title title={tab.name} subtitleStyle={{color:'#FF69B4',fontWeight:'900',fontSize:15}} subtitle={tab.time} titleStyle={{color:'#FF69B4',fontSize:30}}/>
                    <Card.Content>
                        <Paragraph style={{color:'#FF69B4',fontSize:15}}>{tab.days} days</Paragraph>
                        <Card.Cover style={{height:150,width:150,borderRadius:15,alignSelf:'auto'}} source={{ uri:listy[key]}} />
                    </Card.Content>

                    <Card.Actions style={{paddingLeft:12}}>
                    <TouchableOpacity style={styles.button} onPress={()=>Vibration.vibrate(1000)}><Text style={styles.texty}>Taken</Text></TouchableOpacity>
                    </Card.Actions>
                </Card>

                <Card style={{backgroundColor:'#F5FFFA',borderColor:'#ff9966'}}>
                    {/* <Card.Title title={tab.name} subtitleStyle={{color:'#ff9966',fontSize:15}} subtitle="Stick to your schedule" titleStyle={{color:'#ff9966',fontSize:30}}/> */}
                    <Card.Content>
                    <PieChart
                        data={[
                            { name: 'Taken', pills: 2, color: '#a2a8d3', legendFontColor: '#000000', legendFontSize: 15 },
                            { name: 'Left', pills: 5, color: '#38598b', legendFontColor: '#000000', legendFontSize: 15 },
                          ]}
                        width={300}
                        height={220}
                        chartConfig={{
                            backgroundGradientFrom: '#1E2923',
                            backgroundGradientTo: '#08130D',
                            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                            strokeWidth:10, // optional, default 3
                            
                          }}
                        accessor="pills"
                        backgroundColor="transparent"
                        paddingLeft="50"
                        absolute
                    />
                        {/* <Paragraph style={{color:'#ff9966',fontSize:15,fontWeight:'bold'}}>{tab.time}</Paragraph> */}
                        {/* <Card.Cover style={{height:150,width:150,borderRadius:15,alignSelf:'auto'}} source={{ uri:listy[key]}} /> */}
                    </Card.Content>

                    {/* <Card.Actions style={{paddingLeft:12}}>
                    <TouchableOpacity style={styles.button} onPress={()=>Vibration.vibrate(1000)}><Text style={styles.texty}>Taken</Text></TouchableOpacity>
                    </Card.Actions> */}
                </Card>

                 
                </View>
            ))}
            <TouchableOpacity style={styles.button} onPress={this.onRefresh}><Text style={styles.texty}>Refresh</Text></TouchableOpacity>
            </View>
        )
        else
        return(
         <ActivityIndicator/>
        ) 
    }

}

const styles=StyleSheet.create({
	texty:{
        fontSize:20,
        alignSelf:'center',
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


