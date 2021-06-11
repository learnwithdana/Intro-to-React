
// Then we learned the JSX expression can incorporate values extracted 
// from variables by surrounding the variables or expressions with { }

let num1 = 5;
let num2 = 7;
let sum = num1 + num2;

// This time I put ( ) around the JSX in the variable because I
// through the hanging ; at the end looked funny

let mathExpression = (
  <div>
    <p>Injecting the sum for {num1} + {num2} = {sum}</p>
  </div>
);

ReactDOM.render(
    mathExpression, 
    document.getElementById("root")
);
