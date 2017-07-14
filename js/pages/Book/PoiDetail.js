import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image,ScrollView,WebView} from 'react-native';
import HTMLView from 'react-native-htmlview';

import TopBar from '../../common/TopBar'
import ViewUtils from '../../util/ViewUtils'

export default class PoiDetail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.result)
  }
  onBack(){
  this.props.navigator.pop();
  }
  render() {
    let PropData =this.props.result;
    return <View style={styles.container}>
      <TopBar 
        title={PropData.title}
        leftButton={ViewUtils.getLeftButtonBlack(()=>{
          this.onBack();
        })}
      />
      <ScrollView>
        <View style={styles.image_wrapper}>
          <Image 
            style={{
              height:250,
            }}
            source={{uri:PropData.pictures[0].img_url}}
            resizeMode={'contain'}
          />
          <View style={styles.time_show_wrapper}>
            <Image 
              style={{
                height:17,
                width:17,
                marginRight:5,
                tintColor:'#FFF'
              }}
              source={require('../../../res/img/timer.png')}
              resizeMode={'contain'}
            />
            <Text style={styles.timer}>{PropData.start_time}-</Text>
            <Text style={styles.timer}>{PropData.end_time}</Text>
          </View>
        </View>
        <View style={styles.general_desc}>
          <View style={styles.row}>
            <Image 
              style={{
                height:13,
                width:14,
                marginRight:5,  
              }}
              source={require('../../../res/img/general_desc.png')}
              resizeMode={'contain'}
            />
            <Text style={styles.desc_title}>基本信息</Text>
          </View>
          <Text style={styles.desc_content}>{PropData.general_desc}</Text>
        </View>
        <View style={styles.general_desc}>
          <View style={styles.row}>
            <Image 
              style={{
                height:13,
                width:14,
                marginRight:5,  
              }}
              source={require('../../../res/img/scenario_desc.png')}
              resizeMode={'contain'}
            />
            <Text style={styles.desc_title}>详细信息</Text>
          </View>
          <View
            style={{
              padding:15
            }}
          >
            <HTMLView
              value={PropData.scenario_desc}
              onLinkPress={(url) => {}}
              stylesheet={{
                ul:styles.description,
                span:styles.description,
                li:styles.description,
                ul:styles.description,
                ul:styles.description,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  row:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginTop:25,
    marginBottom:25
  },
  image_wrapper:{
    position:'relative',
    height:250,
    overflow:'hidden'
  },
  time_show_wrapper:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    position:'relative',
    top:-255,
    height:100,
    width:300,
  },
  timer:{
    fontSize:20,
    fontWeight:'bold',
    color:'#FFF',
  },
  desc_title:{
    fontSize:15,
    fontWeight:'bold',
    color:'black'
  },
  desc_content:{
    paddingHorizontal:15,
    lineHeight:20,
    fontSize:13,
    color:'#665D5A'
  },
  description:{
    lineHeight:20,
    fontSize:13,
    color:'#665D5A'
  }
});