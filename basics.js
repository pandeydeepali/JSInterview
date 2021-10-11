/**
 * 
 * @param {Decending String} str 
 */

let decendingString=(str)=>{
    let strArr=str.split("").sort().reverse().join("")
    return strArr;
   
}
console.log(decendingString("supriya"))


/**
 * Remove DUplicates means unique array
 */

let removeDuplicate=(array)=>{
  return [...new Set(array)]
}

removeDuplicate(['Supriya', 'Arpana', 'Supriya', 'Anshul', 'Arpana'])

let chars = ['Supriya', 'Arpana', 'Supriya', 'Anshul', 'Arpana', 'Meenakshi'];
//console.log(chars+'==>', _.uniq(chars))
let uniqueChars = chars.filter((c, index) => {
    console.log(chars.indexOf(c))
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);

/**
 * duplicate array
 */

 let array = ['Supriya', 'Arpana', 'Supriya', 'Anshul', 'Arpana', 'Meenakshi'];
 let duplicateChars = array.filter((c, index) => {
     return array.indexOf(c) !== index;
 });
 
 console.log(duplicateChars);



 const capatatise=(str)=>{
     console.log(str.slice(1))
    return str.charAt(0).toUpperCase() + str.slice(1);
     
 }

 console.log(capatatise('hello'))