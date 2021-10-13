/**Constructor Function */
function constructorClass(initValue){
    this.publicMember=initValue;
    var _privateMember='Supriya';
    this.getPrivateMember= function(){
        return _privateMember;
    }
    this.setPrivateMember=function(_privateMember){
            this._privateMember=_privateMember;
    }
 }

const car2=new constructorClass(500)
console.log(car2.publicMember)//500
console.log(car2.getPrivateMember()) //Supriya is returning
console.log(car2._privateMember)  //undefined Since it has private scope

