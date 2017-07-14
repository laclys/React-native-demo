import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image} from 'react-native';
import ScrollableTabView ,{ScrollableTabBar} from 'react-native-scrollable-tab-view';

import TopBar from '../../common/TopBar';
import DayDetails from './DayDetails';
import ViewUtils from '../../util/ViewUtils';

export default class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.initialPage = this.props.item.day - 1
    this.dayCount = this.props.tripData.length
  }
  onBack() {
    this.props.navigator.pop();
  }
  render() {
    let day_list = this.props.tripData.map((result,i,arr)=>{
      let day='D'+ result.day;
      return <DayDetails 
        {...this.props}
        tabLabel={day} 
        tripData={this.props.tripData[i]}
        key={i}
        />
    })
    return <View style={styles.container}>
      <TopBar 
        title='每日行程'
        leftButton={ViewUtils.getLeftButtonBlack(()=>{
          this.onBack();
        })}
      />
      <ScrollableTabView
        style={{marginTop: -5,}}
        initialPage={this.initialPage}
        tabBarBackgroundColor="#FFF"
        tabBarInactiveTextColor="#646464"
        tabBarActiveTextColor="#00B7B7"
        tabBarUnderlineStyle={{backgroundColor:'#00B7B7',height:2}}
        renderTabBar={()=><ScrollableTabBar/>}
      > 
        {day_list}
      </ScrollableTabView>
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});