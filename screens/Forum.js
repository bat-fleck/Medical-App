import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import {WebView,BackHandler,
  Platform,} from 'react-native';
//import console = require('console');


export default class Forum extends Component {
  webView = {
    canGoBack: false,
    ref: null,
  }

  state={
    key:1,
  }


  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }

  render() {
    console.log("1")
    return (
      <View style={{flex:1,alignContent:'center',justifyContent: 'center',}}>
        <View style={{flex:10}}>
          <WebView key={this.state.key}
              source={{uri: 'http://192.168.43.141:8000/forum/'}}
              style={{marginTop: 20}}
              ref={(webView) => { this.webView.ref = webView; }}
              onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
          />
        </View>

        <View style={{flex:1}}>
          <Button title="Refresh" onPress={()=>this.setState(
            prevKey=>({key:prevKey.key+1}))}/>
        </View>    
      </View>    
    );
  }
}
