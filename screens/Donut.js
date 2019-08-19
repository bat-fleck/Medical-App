import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  PieChart,
} from 'react-native-chart-kit'

const data = [
  { name: 'Taken', pills: 2, color: '#97cfa5', legendFontColor: '#000000', legendFontSize: 15 },
  { name: 'Left', pills: 6, color: '#eb4934', legendFontColor: '#000000', legendFontSize: 15 },
]

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth:10, // optional, default 3
  //legend:false
}

export default class Donut extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <PieChart
  data={data}
  width={300}
  height={220}
  chartConfig={chartConfig}
  accessor="pills"
  backgroundColor="transparent"
  paddingLeft="50"
  absolute
/>
      </View>
    );
  }
}
