import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image} from 'react-native';

import TopBar from '../common/TopBar'

export default class BookPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={styles.container}>
      <TopBar 
        title={'路书'}
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