import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image} from 'react-native';

import TopBar from '../common/TopBar'

export default class MyPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={styles.container}>
      <TopBar 
        title={'个人中心'}
        style={{backgroundColor:'#FCFCFA'}}
      />
      <Text style={styles.text}>RN Demo-0.0.1</Text>
      <Text style={styles.text}>By UniqueWay</Text>
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:18,
    color:'#6cf'
  }
});