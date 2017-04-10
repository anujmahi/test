/**
 * Created by Mausham on 4/10/2017.
 */


var util=require('util');
var Event=require('./Event')
function AuditEvent(){

    AuditEvent.super_.apply(this, arguments);
    AuditEvent.prototype.getInfo=function(){
        return this.info
    }

    AuditEvent.prototype.setInfo=function(info){
        this.info= info;
    }
}

util.inherits(AuditEvent,Event);
module.exports=AuditEvent;
