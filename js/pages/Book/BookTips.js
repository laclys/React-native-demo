import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image,WebView} from 'react-native';

import DataRepository from '../../expand/dao/DataRepository';

const URL = "https://api.uniqueway.com/api/app3/v1/plans/50472/country_tips?user_token=_b5kmWe8qH1b_Q5mNyGz&user_id=";

/**
 * 国家小贴士页面
 */
export default class BookTips extends Component {
  constructor(props) {
    super(props);
    this.dataRepository=new DataRepository();
    this.state={
      isLoading:false,
      result:'',
      htmlData:''
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
          htmlData:items.html,
          isLoading:false,
        });
      })
      .then(items=>{
        if(!items||items.length===0) return;
        this.setState({
          htmlData:items.html,
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
  render() {
    return <View style={styles.container}>
        <WebView
          source={{html:this.state.htmlData}}
        ></WebView>
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});