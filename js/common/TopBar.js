import React, {Component, PropTypes} from 'react';
import {View, Text, Image, StyleSheet, Platform,StatusBar} from 'react-native';

const NAVBAR_HEIGHT_ANDROID = 50;
const NAVBAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20
const StatusBarShape={
  backgroundColor:PropTypes.string,
  barStyle:PropTypes.oneOf(['default','light-content','dark-content']),
  hidden:PropTypes.bool,
}
/**
 * 顶部文字
 */
export default class TopBar extends Component {
  static PropTypes = {
    View: PropTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    hide: PropTypes.bool,
    leftButton: PropTypes.element,
    rightButton: PropTypes.element,
    statusBar:PropTypes.shape(StatusBarShape)
  }
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      hide: false
    }
  }
  render() {
    let status=<View style={[styles.statusBar,this.props.statusBar]}>
        <StatusBar {...this.props.statusBar}/>
      </View>
    let titleView = this.props.titleView
      ? this.props.titleView
      : <Text style={styles.title}>{this.props.title}</Text>
      
    let content = <View style={styles.navBar}>
      {this.props.leftButton}
      <View style={styles.titeViewContainer}>
        {titleView}
      </View>
      {this.props.rightButton}
    </View>
    return (
      <View style={[styles.container,this.props.style]}>
        {status}
        {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFA',
    shadowColor: "#DBDFE6",
    shadowOpacity: 0.9,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  navBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios'
      ? NAVBAR_HEIGHT_IOS
      : NAVBAR_HEIGHT_ANDROID,
    flexDirection: 'row'
  },
  titeViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    left: 40,
    right: 40,
    top: 0,
    bottom: 0
  },
  title: {
    fontSize: 17,
    color: '#3A3331'
  },
  statusBar:{
    height:Platform.OS === 'ios'?STATUS_BAR_HEIGHT:0,
  }
})