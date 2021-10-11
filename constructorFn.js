function Person(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;

    this.displayName=function(){
        console.log('Full Name is', this.firstName+''+this.lastName);
    }
}

let person1= new Person('Supriya', 'Pandey')
let person2=new Person('Jasdee', 'Pandey') 
person1.displayName();
person2.displayName();
person1._proto_=person2;

var b="Global"

var obj={
    b:'custom'
}

function whatsthis(){
    return this.b;
}
whatsthis();
whatsthis.call(obj)


// let obj1={
//     fname: 'Supriya',
//     lname:'Pandey',
//     getFullName
// }

