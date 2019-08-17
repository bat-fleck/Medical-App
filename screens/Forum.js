import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import {WebView} from 'react-native';
//import console = require('console');


export default class Forum extends Component {
    static navigationOptions = {
        header: null
    }
  
    state={
      key:1,
    }

  render() {
    console.log("1")
    return (
      <View style={{flex:1,alignContent:'center',justifyContent: 'center',}}>
        <View style={{flex:10}}>
          <WebView key={this.state.key}
              source={{uri: 'https://www.reddit.com/user/weirdfellatio/'}}
              style={{marginTop: 20}}
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
