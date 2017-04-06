/**
 * Created by Mausham on 4/6/2017.
 */


module.exports=function(){

    var abc=[];
    var def=[];
    var final=[];
    var TotalRecordscount=0;
    var RecordProcessedCount=0;
    var RecordUnProcessed=0;


    this.validateData=function(arrayData) {
        if (arrayData.length < 1)
            return new Error("Invalid Length of Records")
        TotalRecordscount = arrayData.length;
        for (var x in arrayData) {
            var resulymessage=verifyJson(arrayData[x])
            if ( resulymessage instanceof Error){
                abc.push(
                    {
                        recordNumber:x,
                        ErrorMessage:resulymessage.message
                    }
                )
                RecordUnProcessed += 1;
            } else {
                    RecordProcessedCount += 1;
                    def.push(arrayData[x])
                }
            }


        console.log("Total Processed Records %d", RecordProcessedCount);
        console.log("Total UnProcessed Records %d", RecordUnProcessed);
        //console.log("Total Processed Records %d",TotalRecordscount-RecordUnProcessed);
        final.push(abc);
        final.push(def);
        return final;
    }

}

function verifyJson(data){

   return  verifyJSontype(data)
}


function verifyJSontype(data){

    var objectConstructor = {}.constructor;
    var message=data.constructor != objectConstructor?new Error("Not Valid JSON Object"):"";
    if(message instanceof  Error)
        return message
    else
        return verifyJsonField(data)
}

function verifyJsonField(data){

    if(data.checkID.length!=0 && data.checkID!=null)
       return true;

    else
       return new Error("Required Field missing")
}