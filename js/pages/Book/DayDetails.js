import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image,ListView} from 'react-native';

import ScheduleItem from './ScheduleItem'

export default class DayDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
    }
  }
  componentDidMount() {
    this.loadData();
  }
  loadData(){
    console.log(this.props.tripData.schedule_places)
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.props.tripData.schedule_places),
    });
  }
  renderRow(data, sectionID, rowID){
    return <ScheduleItem
      key={rowID}
      data={data}
      {...this.props}
    />
  }
  render() {
    return <View style={styles.container}>
            <ListView
            dataSource={this.state.dataSource}
            renderRow={(data, sectionID, rowID)=>this.renderRow(data, sectionID, rowID)}
          />  
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});