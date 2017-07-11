import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image} from 'react-native';
import HomePage from './HomePage'

/**
 * 欢迎页面
 */
export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      this
        .props
        .navigator
        .resetTo({component: HomePage})
    }, 2000)
  }
  componentWilllUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return <View style={styles.container}>
      <Image
        style={styles.welPic}
          source={require('../../res/img/welcomePic.png')}
          resizeMode={'contain'}
      />
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  welPic:{
    flex:1,
    position:'relative',
  }
});