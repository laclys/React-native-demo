import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image,ScrollView,Alert,TouchableOpacity} from 'react-native';

import ListDao from '../../expand/dao/ListDao';
import CheckBox from 'react-native-check-box';
import ArrayUtils from '../../util/ArrayUtils';

export default class BookCheck extends Component {
  constructor(props) {
    super(props);
    this.listDao = new ListDao();
    this.changeValue=[];
    this.state={
      dataArray:[]
    }
  }
  componentDidMount(){
    this.loadData();
  }
  loadData(){
    this.listDao.fetch()
        .then(result=>{
          this.setState({
            dataArray:result
          })
        })
        .catch(error=>{
          console.log(error);
        })
  }
  renderView(){
    if(!this.state.dataArray||this.state.dataArray.length===0)return null;
    let len = this.state.dataArray.length;
    let views=[];
    for(let i=0,l=len;i<l;i++){
      views.push(
        <View key={i}>
          <View style={styles.item}>
              {this.renderCheckBox(this.state.dataArray[i])}
          </View>
          <View style={styles.line}></View>
        </View>
      )
    }
    return views;
  }
  onClick(data){
    data.checked=!data.checked;
    ArrayUtils.updateArray(this.changeValue,data);
  }
  renderCheckBox(data){
    let leftText=data.name;
    return (
      <CheckBox
        style={{flex:1,padding:10}}
        onClick={()=>this.onClick(data)}
        leftText={leftText} 
        isChecked={data.checked}
        checkedImage={<Image style={{tintColor:'black'}}
          source={require('../../../res/img/Check.png')}
         />}
        unCheckedImage={<Image style={{tintColor:'#BEB7B4'}}
          source={require('../../../res/img/Check.png')}
         />}
      />
    )
  }
  render() {
    return <View style={styles.container}>
      <ScrollView>
        {this.renderView()}
      </ScrollView>
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  item:{
    flexDirection:'row',
    alignItems:'center'
  },
  line:{
    height:0.3,
    backgroundColor:'grey'
  },
});