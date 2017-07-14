import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
/**
 * 行程日程list页面
 */
export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.poiArr=[];
    this.loadPoi()
  }
  loadPoi() {
    let arrTemp = this.props.data.schedule_places;
    for(var i=0;i<arrTemp.length;i++) {
      this.poiArr.push(arrTemp[i].title)
    }
    console.log(this.poiArr);
  }
  render() {
    return <TouchableOpacity
      style={styles.container}
      key={this.props.data.day}
      onPress={this.props.onSelect}
    >
      <View style={styles.list_wrapper}>
        <View style={styles.day_wrapper}>
          <Text style={styles.day}>D{this.props.data.day}</Text>
        </View>
        <View style={styles.poi_date_wrapper}>
          <View style={{flexDirection: 'row'}}>
            {this.poiArr.map((result,i,arr)=>{
              return content = i==arr.length-1?<Text style={styles.text} key={i}>{result}</Text>
                :<Text style={styles.text} key={i}>{result} - </Text>
            })}
          </View>
          <Text style={styles.text} style={styles.date}>{this.props.data.date}</Text>
        </View>
        <Image 
          style={styles.icon_pic}
          source={require('../../../res/img/enter_icon.png')}
        />
      </View> 
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F7FBFB',
  },
  list_wrapper:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    height:92,
    padding:10,
    marginLeft:5,
    marginRight:5,
    marginVertical:3,
    borderWidth:0.5,
    borderColor:'#ddd',
    backgroundColor:'white',
    //ios only:
    shadowOffset:{
      width:0.5,
      height:0.5
    },
  },
  day_wrapper:{
    overflow: 'hidden',
    width:35,
    height:35,
    borderRadius:35,
    backgroundColor:'#00B7B7',
  },
  day:{
    lineHeight:35,
    fontSize:17,
    color:'#FFF',
    textAlign: 'center'
  },
  poi_date_wrapper:{
    position:'relative',
    alignItems:'center'
  },
  date:{
    marginTop:18
  },
  icon_pic:{
    width:11.5,
    height:18.5,
  }
})