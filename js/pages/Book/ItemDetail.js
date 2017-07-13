import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image} from 'react-native';

export default class ItemDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={styles.container}>
      <Text>1232312312312</Text>
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