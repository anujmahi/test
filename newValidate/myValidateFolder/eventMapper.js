/**
 * Created by Mausham on 4/10/2017.
 */

var hashmap=require('hashmap')
var map=new hashmap();
var eventMapper=function(){

    this.mapEvents=function(objList){
         map.set('someInfo',objList.getSomeInfo());
         map.set('info',objList.getInfo())
         return map;
    }
}

module.exports=new eventMapper();