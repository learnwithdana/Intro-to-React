
// So this example just glued a bunch of the other examples into a big
// "container element"

const titleElement = (
    <div>
        <h1>Hello World</h1>
    </div>
);

let num1 = 5;
let num2 = 7;
let sum = num1 + num2;

let mathElement = (
  <div>
    <p>Injecting the sum for {num1} + {num2} = {sum}</p>
  </div>
);

let styledElement = (
    <div>
        <p className="red">This is a test of a CSS class that turns text red</p>
    </div>
);

// Here's the container Element that controls the order that everything is
// glued together.  This element is used in ReactDOM.render() below

let containerElement = (
    <div>
        {titleElement}
        {styledElement}
        {mathElement}
    </div>
);

ReactDOM.render(
    containerElement, 
    document.getElementById("root")
);
