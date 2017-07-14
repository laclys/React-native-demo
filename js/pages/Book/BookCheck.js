import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image} from 'react-native'

export default class BookCheck extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.container}>
      <Text>清单列表</Text>
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});