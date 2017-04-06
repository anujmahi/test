/**
 * Created by Mausham on 4/6/2017.
 */

var testMod=require('./validateData.js')

var testModObj=new testMod();

var testArr=[];

var mydata1={
    checkID:"",
    appID:"myApp"
}

var mydata=[1,89]
var mydata2={
    checkID:"1234",
    appID:"myApp"
}

testArr.push(mydata1);
testArr.push(mydata2);
testArr.push(mydata)

for(var i=0;i<100000;i++)
{

    if(i<50000)
    {
        testArr.push(mydata2);
    }else{
        testArr.push(mydata1);
    }
}
var test=testModObj.validateData(testArr)
//console.log(test)
console.log("Process Records :"+test[1].length)
console.log("UnProcessed Records :"+test[0].length);


