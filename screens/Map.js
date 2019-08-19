import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet,ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import pin from '../assets/images/pin.png'
import * as Permissions from 'expo-permissions';
import MapView from 'react-native-maps';
//import console = require('console');

export default class App extends Component {
  state = {
    location: null,
    errorMessage: null,
    places:null,
    nearbyPharmacy:null,
    markers:null,
  };

  componentWillMount() {
      this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      alert("Permission Denied")
      return; 
    }
    let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.BestForNavigation});
    console.log(location)
    let latitude=Number(location.coords.latitude)
    let longitude=Number(location.coords.longitude)
    console.log(latitude,longitude)
    let list=await fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=10.0558685,76.3543087&radius=250&type=pharmacy&key=AIzaSyBQUfMNEAQSUVWcOWyXJbtR1K6ZLrdxXhk")
    let jsonBoi=await list.json()
    this.setState({markers:jsonBoi.results})
    //console.log(obj)
    // this.setState({
    //   places:obj
    // })  
    this.setState({location});
  }    
  render() {
    let pincolor="gold"
    if(this.state.location==null)
      return(<ActivityIndicator style={{flex:1}} />)
    else  
    return (
      <MapView style={{flex:1}} initialRegion={{
        latitude: this.state.location.coords.latitude,
        longitude: this.state.location.coords.longitude,
        latitudeDelta: 0.3/60,
        longitudeDelta: 0.3/60, 
        pinColor:'teal'
      }}>
      
      <MapView.Marker coordinate={this.state.location.coords}
        title="You are here" image={pin}
      />
      {/* {this.state.places} */}
      {this.state.markers.map(pharm=>
        
          <MapView.Marker title={pharm.name} description={pharm.name} coordinate={{latitude:pharm.geometry.location.lat,longitude:pharm.geometry.location.lng}} />
          
        
    )}
      {/* <MapView.Marker coordinate={this.state.places.pharmacy}
        title="Pharmacy"
        pinColor="black"
      /> */}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});