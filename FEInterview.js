/**
 Q1: What does a doctype do?
 */

/* Answer :

  All HTML documents must start with a <!DOCTYPE> declaration.

  The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.
 
  In HTML 5, the declaration is simple
  
  In older documents (HTML 4 or XHTML), the declaration is more complicated because the declaration must refer to a DTD (Document Type Definition).*/

 /**
  Q2: How do you serve a page with content in multiple languages?
  *  */ 

  /**
   * Answer: with html lang attribute on whole page either or we can use lang on span tag element 
   */

  /**
   * <!DOCTYPE html>
<html lang="fr">
    <head>

    </head>
    <body>
        <p>
            We can use different languages in the HTML
            document simply by defining the
            "lang" property
        </p>
      
        <p>French " <span lang="fr">Bonjour</span> "</p>
        <p>Spanish " <span lang="es">Hola</span> "</p>
        <p>Hindi " <span lang="hi">नमस्ते</span> "</p>
        <script src='TwoSum.js'></script>
        <script src='../FEInterview.js'></script>
    </body>
</html>
   */

/**
 * Question 3: Question: What is the value of foo?
 */
 

 var foo = '20' + '40';
 console.log(foo) //2040

 /**
  * Question: What will be the output of the code below?
  */

  console.log(0.1 + 0.2 == 0.3);  //false because of 16 digit  //false

  /**
   * add(2, 5); // 7
add(2)(5); // 7
   */

function add(num1,num2){
    return Number(num1+num2);
}
console.log(add(2,5))

function add1(num1){
    return function(num2){
        return num1+num2

    }
}
console.log(add1(2)(5))

