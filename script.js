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
    

    let i = 0;
    while (i < 3) { // shows 0, then 1, then 2
      console.log( i );
      i++;
    }

    for (let j= 0; j < 3; j++) { // shows 0, then 1, then 2
        console.log(j);
      }



      let userName = 'John';

      function showMessage() {
        userName = "Bob"; // (1) changed the outer variable
      
        let message = 'Hello, ' + userName;
        console.log(message);
      }
      
      console.log( userName ); // John before the function call
      
      showMessage();
      
      console.log( userName ); // Bob, the value was modified by the function


    

      let userName1 = 'John';

      function showMessage1() {
        let userName1 = "Bob"; // declare a local variable
      
        let message1 = 'Hello, ' + userName1; // Bob
        console.log(message1);
      }
      
      // the function will create and use its own userName
      showMessage1();
      
      console.log( userName1 ); // John, unchanged, the function did not access the outer variable