console.log(1.2+"1")
console.log(1-"3")


/**
 * polyfill for bind methods
 */

let nameObj={
    firstName:'Supriya',
    lastName:'Pandey'
}

let printName=function(hometown, city){
     console.log(this.firstName+''+this.lastName+''+hometown+''+city);
}

let printMyName=printName.bind(nameObj, "Shahjahanpur")
printMyName("Uttarakhand");

Function.prototype.customBind=function(...args){
    let obj=this, params=args.slice(1);
    console.log('custom bind', args)
    console.log(params)
    return function(...arg2){
        console.log(arg2)
        obj.apply(args[0], [...params, ...arg2])
        
    }
}

let printMyName2=printName.customBind(nameObj,"Shahjahanpur")
printMyName2("Uttarakhand");

/**
 * Q2: Create polyfill for multiply
 */



Array.prototype.multiply=function(){
    let results=[]
     for(let i=0; i<this.length; i++){
       // for(i of this){
            console.log('ddddybbtfftt',this[i])
         results.push(this[i]*2)
    }

    return [...results]
}

const a =[1,2,3,4,5]
console.log('polyfills==>',a.multiply());


let obj1={
    fname:'Supriya',
    lname:'Pandey',
    getFullName:function(){
        console.log(this.fname+''+this.lname)
    }
}

let obj2={
    name:'Dhman'
}

obj2.__proto__=obj1;

