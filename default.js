// function add(num1, num2){
    // as ES6 (setting default parameter)
    function add(num1, num2 = 0){
    // num2 = num2 || 0;
    // OR
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    return num1 + num2;
}

const total = add(15,30);
console.log(total);