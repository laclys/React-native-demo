import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import BookPage from './BookPage';
import MyPage from './MyPage';

/**
 * Home Page
 */
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedTab:'tb_book',
    }
  }
  _renderTab(Component,selectedTab,title,renderIcon){
    return <TabNavigator.Item
      selected={this.state.selectedTab === selectedTab}
      selectedTitleStyle={{color:'#00B7B7'}}
      title = {title}
      renderIcon={() => <Image style={styles.image} source={renderIcon} />}
      renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#00B7B7'}]} source={renderIcon} />}
      onPress={() => this.setState({ selectedTab: selectedTab })}>
      <Component {...this.props}/>
    </TabNavigator.Item>
  }
  render() {
    return <View style={styles.container}>
      <TabNavigator>
        {this._renderTab(BookPage,'tb_book',"路书",require('../../res/img/bookIcon.png'))}
        {this._renderTab(MyPage,'tb_my',"我的",require('../../res/img/myIcon.png'))}
      </TabNavigator>
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFFFFF',
  },
  image:{
    height:22,
    width:22
  }
})