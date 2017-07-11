import React, {Component} from 'react';
import {View, Text, StyleSheet, Navigator,Image,TouchableOpacity} from 'react-native';

import TopBar from '../common/TopBar';
import DataRepository from '../expand/dao/DataRepository';

const URL = 'https://api.uniqueway.com/api/app3/v1/plans?user_token=_b5kmWe8qH1b_Q5mNyGz&user_id=46481'
export default class BookPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      wrapperData:''
    }
    this.dataRepository=new DataRepository();
  }
  componentDidMount(){
    this.loadData()
  }
  loadData() {
    this.dataRepository.fetchRepository(URL)
        .then(result=>{
          let items = result && result.items ? result.items :result?result:[];
          this.setState({
            wrapperData:items.data[0],
          })
        })
        .then((items)=>{
          if(!items ||items.length === 0 )return;
          this.setState({
            wrapperData:items.data[0]
          })
        })
        .catch(error=>{
          console.log(error)
        })
  }
  render() {
    let image = this.state.wrapperData?<Image
              style={{
                width: 300,
                height: 320
              }}
              source={{uri:this.state.wrapperData.cover_pic}}
            />:null
    let title = this.state.wrapperData?<View style={styles.titleContainer}>
              <Text style={styles.subTitle}>{this.state.wrapperData.dedicate}</Text>
              <Text style={styles.title}>- {this.state.wrapperData.title} -</Text>
            </View>:null
    return <View style={styles.container}>
      <TopBar 
        title={'无二之旅'}
        style={{backgroundColor:'#FCFCFA'}}
      />
      <TouchableOpacity style={styles.bookContainer}>
        <View style={styles.book}>
          {image}
          {title}
        </View>
      </TouchableOpacity>
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  bookContainer:{
    flexDirection:'row',
    justifyContent:'center',
  },
  book:{
    flexDirection:'column',
    position:'relative',
    width:300,
    height:450,
    marginTop:30,
    backgroundColor:'#FFFFFF',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 0
    }
  },
  titleContainer:{
    flex:1,
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center'
  },
  subTitle:{
    fontSize:17,
    fontWeight:'bold',
    color:'#665D5A'
  },
  title:{
    marginTop:10,
    fontSize:13,
    color:'#665D5A'
  }
});