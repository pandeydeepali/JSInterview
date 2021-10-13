const longString= (strArr)=>Math.max(...strArr.map((word)=>word.length))

console.log(longString(['always', 'Supriya','And', 'jitendra', 'Javascript', 'Developer']))

const calculator = (function () {
    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }
    return {
        add: add,
        multiply: multiply
    }
})();

console.log(calculator.add(5,8))