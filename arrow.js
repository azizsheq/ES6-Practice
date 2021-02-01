// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFunc(num){
//     return num * 2;
// }

// using ES6 ... called as Arrow function
const doubleIt = num => num * 2;

const result = doubleIt(44);
console.log(result);

const addIt = (x, y) => x + y;

const result2 = addIt(33, 22);
console.log(result2);

const returnIt = () => 5;
const result3 = returnIt();
console.log(result3);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;

    return result;
}
const result4 = doMath(33, 22);
console.log(result4);