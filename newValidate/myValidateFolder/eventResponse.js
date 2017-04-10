/**
 * Created by Mausham on 4/10/2017.
 */

var eventResponse=function(event,error){

    this.event=event;
    this.error=error;
}

eventResponse.prototype.getEvent=function(){
    return this.event
}

eventResponse.prototype.getError=function(){
    return this.error;
}

module.exports=eventResponse;
