import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image} from 'react-native';

export default class DayDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.container}>
      <Text>D{this.props.tripData.day}</Text>
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
});