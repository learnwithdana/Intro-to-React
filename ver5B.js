
// I did something fun in this example!!!  Keep hitting refresh on 
// the browser!  It will often change what it is showing!

// Why?  I used probabilities to decide whether each list was full 
// or empty (same approach used in computer games!)

// How?  I used the Math.random() function to generate one random number
// to decide whether to blank out my todo list before and another random 
// number to decide whether to blank out my grocery list.  
// The code is shown below.

/*
let myToDos = ["learn React", "eat", "sleep", "play", "practice React"];

// random() returns a number between 0-1
// There's a 45% chance (if the number is 0.0 - 0.45) that I will
// empty out the myToDos array
let chance = Math.random();
if (chance < 0.45) {
  myToDos = [];
}

let myGroceries = [
  "Avocados",
  "Peaches",
  "Dave's Seed Bread",
  "Peter Pan Peanut Butter",
];

// There's a 55% chance (if the number is 0.0 - 0.55) that I will
// empty out the myGroceries array
chance = Math.random();
if (chance < 0.55) {
  myGroceries = [];
}
*/

//*****************************
// The components

class App extends React.Component {
  render() {
      // clean up reference to props using destructuring
      const { name, weather, todos, groceries } = this.props;

    return (
      <div>
        <Header name={name} weather={weather} />
        <MainSection todos={todos} groceries={groceries} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
      // clean up reference to props using destructuring
      const { name, weather } = this.props;

    return (
      <div>
        <h1>Hello, my name {name}!</h1>

        <h3>
          The weather in {weather.currentCity} is {weather.description} with a temperature of {weather.temperature}&deg; fahrenheit.
        </h3>
      </div>
    );
  }
}

class MainSection extends React.Component {
  render() {
    // clean up reference to props using destructuring
    const { todos, groceries } = this.props;

    // generate the todoListItems
    let todoListItems = todos.map((element, index) => {
      return <li key={`${element}-${index}`}>{element}</li>;
    });

    // generate the shoppingListItems
    let shoppingListItems = groceries.map((element, index) => {
      return <li key={`${element}-${index}`}>{element}</li>;
    });

    return (
      <div>
        {todos.length == 0 ? (
          <p>You have no list of things to do.</p>
        ) : (
          <React.Fragment>
            <p>Things to do:</p>
            <ul>{todoListItems}</ul>
          </React.Fragment>
        )}

        {groceries.length == 0 ? (
          <p>You have no items on your grocery list.</p>
        ) : (
          <React.Fragment>
            <p>Things to buy at the grocery store: </p>
            <ul>{shoppingListItems}</ul>
          </React.Fragment>
        )}
      </div>
    );
  }
}

//*****************************
// The data

let myName = "Dana";

let myWeather = {
  currentCity: "Benbrook",
  description: "Sunny",
  temperature: 92,
};

let myToDos = ["learn React", "eat", "sleep", "play", "practice React"];

// random() returns a number between 0-1
// There's a 45% chance (if the number is 0.0 - 0.45) that I will
// empty out the myToDos array
let chance = Math.random();
if (chance < 0.45) {
  myToDos = [];
}

let myGroceries = [
  "Avocados",
  "Peaches",
  "Dave's Seed Bread",
  "Peter Pan Peanut Butter",
];

// There's a 55% chance (if the number is 0.0 - 0.55) that I will
// empty out the myGroceries array
chance = Math.random();
if (chance < 0.55) {
  myGroceries = [];
}

//*****************************
// Render the page

ReactDOM.render(
  <App
    name={myName}
    weather={myWeather}
    todos={myToDos}
    groceries={myGroceries}
  />,
  document.getElementById("root")
);

