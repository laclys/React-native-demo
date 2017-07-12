import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image} from 'react-native';
import ScrollableTabView ,{ScrollableTabBar} from 'react-native-scrollable-tab-view';

import TopBar from '../common/TopBar'
import ViewUtils from '../util/ViewUtils'

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
    let user_id = this.props.items.id
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
        <Text tabLabel="详细行程"></Text>
        <Text tabLabel="定制师"></Text>
        <Text tabLabel="小贴士"></Text>
      </ScrollableTabView>
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});