import React ,{Component} from 'react';
import {
  AsyncStorage
} from 'react-native'

import list from '../../../res/data/list.json'

export default class ListDao{
  fetch(){
    return new Promise((resolve,reject)=>{
      AsyncStorage.getItem('list_key',(error,result)=>{
        if(error){
          reject(error);
        }else{
          if(result){
            try{
              resolve(JSON.parse(result));
            }catch(e){
              reject(e);
            }
          }else{
            var data =list
            this.save(data);
            resolve(data)
          }
        }
      })
    })
  }
  save(data){
    AsyncStorage.setItem('list_key',JSON.stringify(data),(error)=>{
      
    })
  }
}