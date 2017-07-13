import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image,ScrollView,RefreshControl} from 'react-native';

import DataRepository from '../../expand/dao/DataRepository';

const URL = "https://api.uniqueway.com/api/app3/v1/planners/3?user_token=_b5kmWe8qH1b_Q5mNyGz&user_id=";

/**
 * 国家小贴士页面
 */
export default class BookTourist extends Component {
  constructor(props) {
    super(props);
    this.dataRepository=new DataRepository();
    this.state={
      isLoading:false,
      result:'',
      touristData:''
    }
  }
  componentDidMount(){
    this.LoadData();
  }
  LoadData(){
    this.setState({
      isLoading:true
    })
    let url=this.getURL(URL)
    console.log(url);
    this.dataRepository.fetchRepository(url)
      .then(result=>{
        let items = result && result.items? result.items:result?result:[];
        this.setState({
          touristData:items,
          isLoading:false,
        });
      })
      .then(items=>{
        if(!items||items.length===0) return;
        this.setState({
          touristData:items,
          isLoading:false,
        });
      })
      .catch(error=>{
        console.log(error);
        this.setState({
          isLoading:false
        })
      })
  }
  getURL(URL) {
    return URL + this.props.user_id
  }
  onRefresh() {
    this.LoadData()
  }
  render() {
    return <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            // 是否刷新flag
            refreshing={this.state.isLoading}
            // 下拉刷新
            onRefresh={()=>this.onRefresh()}
            colors={['#6cf']}
            tintColor={'#6cf'}
            title={'努力加载中~~~~'}
            titleColor={'grey'}
          />
        }
      >
        <Image
          style={styles.cover_img}
          source={{uri:this.state.touristData.avatar_url}}
          resizeMode={'cover'}
        />
        <View style={styles.tourist_name}>
          <Text
            style={{
              fontSize:20,
              color:'#3A3331',
              fontWeight:'bold'
                }}
          >{this.state.touristData.name}</Text>
          <Text
            style={{
              marginTop:3,
              fontSize:10,
              color:'#665D5A',
              fontWeight:'bold'
                }}
          >· 定制师 ·</Text>
        </View>
        <View style={{
          alignSelf:'center',
          height:2,
          width:20,
          backgroundColor:'black'
        }}></View>
        <Text style={styles.text_content}>{this.state.touristData.bio}</Text>
      </ScrollView>
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    position:'relative'
  },
  cover_img:{
    flex:1,
    width:null,
    height:250
  },
  tourist_name:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    alignSelf:'center',
    height:55,
    width:100,
    marginTop:20,
  },
  text_content:{
    padding:20,
    lineHeight:20,
    fontSize:14,
    color:'#665D5A'
  }
});