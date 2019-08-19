import { LinearGradient } from 'expo-linear-gradient';

import React from 'react';
import { Avatar,  Card, Title, Paragraph} from 'react-native-paper';
import { Text, View, TouchableOpacity,Image,StyleSheet,Alert} from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';

let Ip="http://192.168.43.141:8000";

export default class CameraExample extends React.Component {
	static navigationOptions = {
        header: null
	}
	
	state = {
    	hasCameraPermission: null,
		type: Camera.Constants.Type.back,
		photo64:null,
		isTaken:true
	  };
	
  	async snapPhoto() {       
    	console.log('Button Pressed');
    	if (this.camera) {
       	console.log('Taking photo');
		const options = { quality:0.5, base64: true, fixOrientation: true, exif: true};
       	await this.camera.takePictureAsync(options).then(photo => {
			photo.exif.Orientation = 1; 
			console.log(photo)
			this.setState({
				photo64:photo.base
			})
			//
			//let pic = `data:image/png;base64,${photo.base64}`;
			
			// let body = new FormData();
			// body.append('photo', {uri:pic,name: 'photo.png',filename :'imageName.png',type: 'image/png'});
    		// body.append('Content-Type', 'image/png'st);  
			//console.log(photo.base64);      
        	fetch("http://192.168.43.141:8000/upload/medimg/",{
				method:'POST',
				headers:{
					"Accept":'application/json',
					'Content-Type':"application/json"},
					"body":JSON.stringify({image:photo.base64})
				
			}).then(response=>response.json()).then(result=>this.setState({url:result,isTaken:false})).catch((error)=>console.error(error))    
		});
		

	}
}	


	
	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
    	this.setState({ hasCameraPermission: status === 'granted' });
 	}

	render() {
    	const { hasCameraPermission } = this.state;
    	if (hasCameraPermission === null) {
      		return <View />;
    	} else if (hasCameraPermission === false) {
      		return <Text>No access to camera</Text>;
    	} else {
      		return (
        		<View style={{ flex: 1 }}>
					{this.state.isTaken?(
          			<Camera style={{ flex: 1 }} ref={(ref) =>{this.camera = ref}} type={this.state.type}>
            			<View style={{flex: 1,backgroundColor: 'transparent'}}>
							<View style={{flex:6}}>

							</View>

							<View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
								<View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
									<TouchableOpacity style={{flex: 0.5,alignContent:'flex-start'}}
    													onPress={() => {
                  											this.setState({
                    											type:this.state.type === Camera.Constants.Type.back? Camera.Constants.Type.front: Camera.Constants.Type.back,
                  										});
                					}}>
                					<Image style={{width: 50, height: 50}} source={require('../assets/images/flip.png')}/>
              						</TouchableOpacity>
								</View>
              					
								<View style={{flex:0.5,alignSelf:'stretch'}}>
									<TouchableOpacity style={{flex:1,alignContent: 'center',}} onPress={this.snapPhoto.bind(this)}>
               							<Image style={{width: 75, height: 75}} source={require('../assets/images/shutter.png')}/>
            						</TouchableOpacity>
								</View>

								<View style={{flex:1,alignContent:'center'}}>

								</View>
							
							</View>	
           	 			</View>
					  </Camera>):
					  (<LinearGradient style={styles.container} colors={['#FF69B4','#ff9966']} start={['0.9','0.5']} >
							{this.state.url.map(item=>(
							<View style={{justifyContent: 'center'}}>
							   <Text style={{fontSize:40,fontFamily:'Roboto',fontWeight:'bold',color:'#fffff',alignSelf:'center'}}>Scanned Image</Text>
							    <Card style={{backgroundColor:'#F5FFFA',borderRadius:20, borderColor:'#ff9966'}}>
                    			<Card.Title title={item.name} subtitleStyle={{color:'#FF69B4',fontWeight:'900',fontSize:15}} subtitle={item.time} titleStyle={{color:'#FF69B4',fontSize:30}}/>
                    			<Card.Content>
                        			<Paragraph style={{color:'#FF69B4',fontSize:15}}>{item.days} days</Paragraph>
                        			{/* <Card.Cover style={{height:150,width:150,borderRadius:15,alignSelf:'auto'}} source={{ uri:listy[key]}} /> */}
                    			</Card.Content>

                    			<Card.Actions style={{paddingLeft:12}}>
                    				{/* TouchableOpacity style={styles.button} onPress={()=>Vibration.vibrate(1000)}><Text style={styles.texty}>Taken</Text></TouchableOpacity> */}
                    			</Card.Actions>
                				</Card>
							  </View>))}
					
					  		
				 	 </LinearGradient>)}
        	</View>
      );
	}
  }
}  

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  paddingTop:20,
	  //alignItems: "center",
	  justifyContent: "center"
	}
  });
  