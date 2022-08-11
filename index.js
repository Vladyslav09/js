let arg1 = Number(prompt('Fill in first number'));
let arg2 = Number(prompt('Fill in second number'));


function get(num1, num2){
    let result;
    if(num1 > num2){
        return num1;
    } else{
        return num2;
    }
}
let result = get(arg1, arg2);
console.log(result);



function average(num1, num2){
    let avrg = (num1 + num2) / 2;
    return avrg;
}

let res2 = average(arg1, arg2);
console.log(res2);

function iseven(num){
    // if(num % 2 ===0) {
    //      return true;
    // } else{
    //     return false;
    // }
    return num % 2 === 0;
}
let res3 = iseven(arg1, arg2);
console.log(res3);