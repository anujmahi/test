/**
 * Created by Mausham on 4/10/2017.
 */

var validateResponse=function(events,errors){

    this.events=events;
    this.errors=errors;
}

validateResponse.prototype.getEvents=function(){
    return this.events
}

validateResponse.prototype.getErrors=function(){
    return this.errors;
}

module.exports=validateResponse;
