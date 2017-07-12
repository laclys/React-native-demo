import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image} from 'react-native';
import ScrollableTabView ,{ScrollableTabBar} from 'react-native-scrollable-tab-view';

import TopBar from '../common/TopBar';
import ViewUtils from '../util/ViewUtils';

import BookContent from './Book/BookContent';
import BookTourist from './Book/BookTourist';
import BookTips from './Book/BookTips';

export default class BookDetails extends Component {
  constructor(props) {
    super(props);
  }
  renderTitleView() {
    return <View>
        <Text style={{color:'#fff',fontSize: 17,}}>路书</Text>
    </View>    
  }
onBack() {
  this.props.navigator.pop();
}
  render() {
    let user_id = this.props.items.user_id
    return <View style={styles.container}>
      <TopBar 
        titleView={this.renderTitleView()}
        style={{backgroundColor:'#534641'}}
        leftButton={ViewUtils.getLeftButton(()=>{
          this.onBack();
        })}
      />
      <ScrollableTabView
        style={{height:44}}
        tabBarBackgroundColor="#FFF"
        tabBarInactiveTextColor="#646464"
        tabBarActiveTextColor="#00B7B7"
        tabBarUnderlineStyle={{backgroundColor:'#00B7B7',height:2}}
        renderTabBar={()=><ScrollableTabBar/>}
      > 
        <BookContent tabLabel="详细行程" {...this.props} user_id={user_id}></BookContent>
        <BookTourist tabLabel="定制师" {...this.props} user_id={user_id}></BookTourist>
         <BookTips tabLabel="小贴士"{...this.props} user_id={user_id}></BookTips> 
      </ScrollableTabView>
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});