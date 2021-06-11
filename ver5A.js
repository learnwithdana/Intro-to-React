
// NOW THE APP IS GETTING BIG!  In this example, we will pass several 
// pieces of data ("props") to one component, 
// which will then pass them along to other components!
// (It's like having a middle man -- "I know a guy who knows a guy!")

// Start by looking at ReactDOM.render() and see how it passes
// props to the App component  
// <App name={myName} weather={myWeather} todos={myToDos} groceries={groceries} />

// name=  ,  weather=  , todos= , and groceries= are the names of the props in 
// being passed to the App component.  The values in { } are the variables that
// contain the values we are apssing

// Now see how the App component received them?  Line 34
// We used object destructuring to take what was in this.props.name, this.props.weather,
// this.props.todos, and this.props.groceries and put them in simpler variable names
// const { name, weather, todos, groceries } = this.props;

// The App component then just passed those values on to other (helper) components!
//     1) name and weather on to the Header component!  Line 41
//     2) todos and groceries on to the MainSection component!  Line 42

// Study Line 41 some more... <Header name={name} weather={weather} />
// name=  and  weather=  are the names of the props in the Header component
// and {name} and {weather} are the values from THIS component that we are
// passing to the Header props

// This script corresponds exactly to an in-class project on Friday (Day 2)

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

let myGroceries = [
  "Avocados",
  "Peaches",
  "Dave's Seed Bread",
  "Peter Pan Peanut Butter",
];

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
