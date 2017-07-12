import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image} from 'react-native';

import DataRepository from '../../expand/dao/DataRepository'

/**
 * 定制师页面
 */
export default class BookTourist extends Component {
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