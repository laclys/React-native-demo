import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image,ListView,RefreshControl} from 'react-native';

import DataRepository from '../../expand/dao/DataRepository';
import ListItem from './ListItem';

const URL = 'https://api.uniqueway.com/api/app3/v1/plans/46301/schedules?user_token=_b5kmWe8qH1b_Q5mNyGz&user_id='

/**
 * 详细行程页面
 */
export default class BookContent extends Component {
  constructor(props) {
    super(props);
    this.dataRepository=new DataRepository();
    this.state={
      result:'',
      isLoading:false,
      dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
    }
  }
  componentDidMount(){
    this.LoadData();
  }
  LoadData(){
    this.setState({
      isLoading:true
    })
    let url=this.getURL(URL);
    this.dataRepository.fetchRepository(url)
      .then(result=>{
        let items=result && result.items ? result.items : result ? result : [];
        console.log(items);
        console.log(items.data);
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(items.data),
          isLoading:false,
        });
      })
      .then((items)=> {
          if (!items || items.length === 0)return;
          this.setState({
              dataSource: this.state.dataSource.cloneWithRows(items.data),
              isLoading: false
          });
      })
      .catch(error=> {
          console.log(error);
          this.setState({
              isLoading: false
          });
      })
  }
  PullLoadData () {
    this.setState({
      isLoading:true
    })
    let url=this.getURL(URL);
    this.dataRepository.fetchNetRepository(url)
      .then((items)=> {
          if (!items || items.length === 0)return;
          this.setState({
              dataSource: this.state.dataSource.cloneWithRows(items.data),
              isLoading: false
          });
      }).catch(error=> {
          console.log(error);
          this.setState({
              isLoading: false
          });
      }) 
  }
  getURL(URL) {
    return URL + this.props.user_id
  }
  renderRow(data, sectionID, rowID){
    return <ListItem
      key={rowID}
      data={data}
      /> 
  }
  render() {
    return <View style={styles.container}>
             <ListView
              dataSource={this.state.dataSource}
              renderRow={(data, sectionID, rowID)=>this.renderRow(data, sectionID, rowID)}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.isLoading}
                  // 下拉刷新更新路书~
                  onRefresh={()=>this.PullLoadData()}
                  colors={['#6cf']}
                  tintColor={'#6cf'}
                  title={'下载/更新路书中~~~~'}
                  titleColor={'grey'}
                />
              }
            />  
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});