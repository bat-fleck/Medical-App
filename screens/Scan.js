import { LinearGradient } from 'expo-linear-gradient';

import React from 'react';
import { Text, View, TouchableOpacity,Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';


export default class CameraExample extends React.Component {
	static navigationOptions = {
        header: null
	}
	
	state = {
    	hasCameraPermission: null,
    	type: Camera.Constants.Type.back,
  	};

  	async snapPhoto() {       
    	console.log('Button Pressed');
    	if (this.camera) {
       	console.log('Taking photo');
	    const options = { quality: 1, base64: true, fixOrientation: true, exif: true};
       	await this.camera.takePictureAsync(options).then(photo => {
        	photo.exif.Orientation = 1;            
        	console.log(photo);            
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
          			</Camera>
        	</View>
      );
    }
  }
}
