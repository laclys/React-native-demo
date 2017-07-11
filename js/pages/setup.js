import React, {Component} from 'react';
import {View, Text, StyleSheet,Navigator} from 'react-native';
import WelcomePage from './WelcomePage'
/**
 * 入口
 */
function setup() {
  class Root extends Component{
    renderScene(route,navigator){
      let Component = route.component;
      return <Component {...route.params} navigator={navigator}/>
    }
    render(){
      return <Navigator
        initialRoute={{component:WelcomePage}}
        renderScene={(route,navigator)=>this.renderScene(route,navigator)}
      />
    }
  }
  return <Root/>
}

module.exports=setup;