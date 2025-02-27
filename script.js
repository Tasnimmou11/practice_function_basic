//function declaration
function addition(a, b){
    console.log(a + b);
}

addition(10, 30)
addition(50, 30)

function substraction (a, b){
    return a - b
}
console.log(substraction(20, 10));

//function expression
let jog = function(a, b){
    console.log(a + b);
}
jog( 20,20)

let biyog = function(a, b){
    return a - b
}
console.log(biyog(40, 5));

///arrow function
let division = (a, b)=> a/b
    console.log(division(15, 3));
    


