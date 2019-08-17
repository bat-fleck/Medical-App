import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import console = require('console');
//mport console = require('console');

export default class Donut extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
      fetch("http://192.168.43.143:8000/medicine/?format=json").then((response)=>response.json()).then((result)=>console.log(result))
  }

  render() {
    return (
      <View>
        <Text> Donut </Text>
      </View>
    );
  }
}
