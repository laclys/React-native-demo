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
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});