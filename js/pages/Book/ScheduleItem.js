import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


export default class ListItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
  }
  _renderIcon(category) {
    let source = require('../../../res/img/poi_tips.png')
    if(category === 'attraction') source = require('../../../res/img/poi_tip.png')
    if(category === 'activity') source = require('../../../res/img/poi_place.png')
    if(category === 'airport') source = require('../../../res/img/poi_airplane.png')
    if(category === 'line') source = require('../../../res/img/poi_subway.png')
    if(category === 'hotel') source = require('../../../res/img/poi_hotel.png')
    if(category === 'meal') source = require('../../../res/img/poi_food.png')
    if(category === 'flight') source = require('../../../res/img/poi_goto.png')
    return <Image
        style={styles.icon_poi}
        source={source}
        resizeMode={'contain'}
      />
  }
  render() {
    let data = this.props.data;
    let scheduleContent = data.schedule_pois.map((result,i,arr)=>{
      return <View style={styles.poi_wrapper} key={i}>
        {this._renderIcon(result.category)}
        <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.time}>{result.start_time}-</Text>
            <Text style={styles.time}>{result.end_time}</Text>
          </View>
          <Text style={{flexWrap:'wrap',width:250,fontSize:15,color:'#3A3331'}}>{result.title}</Text>
        </View>
      </View>
    })
    return <View
        style={styles.container}
      >
      <View style={styles.item_wrapper}>
        <Image
          style={styles.icon_placeholder}
          source={require('../../../res/img/placeholder.png')}
          resizeMode={'contain'}
        />
        <Text style={styles.title}>{data.title}</Text>
        {scheduleContent}
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F7FBFB',
  },
  item_wrapper:{
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    padding:25,
    marginLeft:10,
    marginRight:10,
    marginVertical:5,
    borderWidth:0.5,
    borderColor:'#ddd',
    backgroundColor:'#FFF',
    //ios only:
    shadowOffset:{
      width:0.5,
      height:0.5
    },
    // android only
    elevation:2
  },
  icon_placeholder:{
    width:22,
  },
  title:{
    width:200,
    marginBottom:20,
    textAlign:'center',
    fontSize:17,
    fontWeight:'bold',
    color:'#3A3331',
  },
  poi_wrapper:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'flex-start',
    marginBottom:30,
  },
  icon_poi:{
    width:30,
    height:30,
    marginRight:15
  },
  time:{
    color:'#999391',
    fontSize:13
  }
})