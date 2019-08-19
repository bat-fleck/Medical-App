import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { Pedometer } from "expo-sensors";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };
 
  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
      
            <LinearGradient style={styles.container} colors={['#FF69B4','#ff9966']} start={['0.9','0.5']} >
                <View style={{alignItems:'center',justifyContent: 'center'}}>
                    <Text style={{fontSize:40,color:"#ffffff",fontFamily:'Roboto',fontWeight:'500'}}>Number Of Steps</Text>
                    <Text style={{fontSize:60,color:"#ffffff"}}>{this.state.currentStepCount}</Text>
                </View>    
            </LinearGradient>
        
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    alignItems: "center",
    justifyContent: "center"
  }
});
