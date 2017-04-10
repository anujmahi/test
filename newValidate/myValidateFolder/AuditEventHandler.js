/**
 * Created by Mausham on 4/10/2017.
 */


var eventMapper=require('./eventMapper.js')
var customeError=require('./customError.js')
var validateResponse=require('./validateResponse.js')
var eventResponse=require('./eventResponse.js')
module.exports=function()
{

  this.validateData =function(eventListObj){

      var successEvents=[];
      var failureEvents=[];
      for(var obj in eventListObj){

           var errorList= validateEvent(eventMapper.mapEvents(eventListObj[obj]))
            if(errorList.length>0){
                failureEvents.push(new eventResponse(eventListObj[obj],errorList))
            }else{
                successEvents.push(eventListObj[obj])
            }
        }
      return new validateResponse(successEvents,failureEvents)

    }
}

var validateEvent =function(event){
   var listError=[];
    event.forEach(function(value,key){
        var missingError=checkMissingField(value,key);
        if(missingError instanceof  Error) listError.push(missingError)
        else{
            missingError=checkEmptyNullField(value,key)
            if(missingError instanceof  Error) listError.push(missingError)
        }
    })
  return listError;
}


var checkMissingField=function(val,key){

    if(val==undefined) return new customeError("TM.0.1",key.toUpperCase()+" field is missing")
}

var checkEmptyNullField=function(val,key){

    if(val.length<1 || val==null) return new customeError("TM.0.2",key.toUpperCase()+" field cannot be empty or null")
}