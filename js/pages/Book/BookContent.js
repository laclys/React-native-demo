import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image} from 'react-native';

import DataRepository from '../../expand/dao/DataRepository'

/**
 * 详细行程页面
 */
export default class BookContent extends Component {
  constructor(props) {
    super(props);
    this.dataRepository=new DataRepository();
  }
  render() {
    return <View style={styles.container}>
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});