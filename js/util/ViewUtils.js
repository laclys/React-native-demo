import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image,TouchableOpacity} from 'react-native';

export default class ViewUtils{
  /**
   * 返回箭头
   * @param {*} cb 回调函数
   */
  static getLeftButton(cb){
    return(
      <TouchableOpacity
        style={{padding:8}}
        onPress={cb}
      >
      <Image
        style={{width:26,height:26,tintColor:'white'}}
        source={require('../../res/img/arrow_back.png')}
      ></Image>
      </TouchableOpacity>  
    )
  }
}