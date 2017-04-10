/**
 * Created by Mausham on 4/10/2017.
 */

var auditEvent=require('./AuditEvent')
var event=new auditEvent();
var event1=new auditEvent();
var auditHandler=require('./AuditEventHandler.js')
var auditEventh=new auditHandler();

event.setInfo("Hello")
event.setSomeInfo("Mausham123")
event1.setInfo("null")
event1.setSomeInfo("Mausham")
var list=[];
list.push(event)
list.push(event1)
for(var x=0;x<10;x++){
    var temp=new auditEvent();
    temp.setInfo("")
    temp.setSomeInfo("Mausham12"+x)
    list.push(temp)
}

var test=auditEventh.validateData(list)
console.log(JSON.stringify(test.getEvents()))
console.log("\n \n \n")
console.log(JSON.stringify(test.getErrors()))