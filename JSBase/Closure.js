/**
 * Functions along with its laxical scope forms a closure
 */

function x(){
    var x=c=14;
    console.log("cccccc", c)
   function y(){
        let x = 10;
       console.log(c);
   }
   y();
  // return y;


}

x();