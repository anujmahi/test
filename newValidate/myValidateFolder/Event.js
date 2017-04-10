/**
 * Created by Mausham on 4/10/2017.
 */

var Events=function(){
    Events.prototype.getSomeInfo=function(){
        return this.someInfo
    }

    Events.prototype.setSomeInfo=function(someInfo){
        this.someInfo =someInfo;
    }

}
module.exports=Events;