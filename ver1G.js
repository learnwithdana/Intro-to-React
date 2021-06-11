
// If you look at the HTML (inspect element) of the last example, there's a crazy number of <div> 
// elements because each JSX expression must have a single HTML node (children okay but 
// no siblings!)

// I upgraded the React scripts in the .html file to use React 16.2 and now I can 
// use <React.Fragment> instead of <div> in JSX to roup elements together  
// (Hou hasn't taught this yet but its a great way to have a JSX expression
// with sibming elements!)

const titleElement = (
    <React.Fragment>
        <h1>Hello World</h1>
    </React.Fragment>
);

let num1 = 5;
let num2 = 7;
let sum = num1 + num2;

let mathElement = (
  <React.Fragment>
    <p>Injecting the sum for {num1} + {num2} = {sum}</p>
  </React.Fragment>
);

let styledElement = (
    <React.Fragment>
        <p className="red">This is a test of a CSS class that turns text red</p>
    </React.Fragment>
);

// So this example just glued a bunch of the other examples into a big
// "container element"

let containerElement = (
    <React.Fragment>
        {titleElement}
        {styledElement}
        {mathElement}
    </React.Fragment>
);

ReactDOM.render(
    containerElement, 
    document.getElementById("root")
);
