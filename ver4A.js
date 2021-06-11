
// In this example, we will use the JavaScrip array map() function to
// generate <li> items for each item in an array

// map() iterates through the array and passes a single array element to 
// the callback (arrow) function.  The function returns a value that it
// wants the element transformed to

class ListApp extends React.Component {
  render() {

    // clean up reference to props using destructuring
    const { todos } = this.props;

    // generate an array of <li> elements -- one for each item in the array
    let todoList = todos.map((element, index) => {
      return <li>{element}</li>;
    });

    return (
      <div>
        <p>Things to do:</p>
        <ul>{todoList}</ul>
      </div>
    );
  }

  // NOTE:  This code generates a warning in the browser console window vecause
  // React wants <li> elements to have a key.  See next example.
}

//*****************************
// The data

let myToDos = ["learn React", "eat", "sleep", "play", "practice React"];

//*****************************
// Render the page

ReactDOM.render(
  <ListApp todos={myToDos} />,
  document.getElementById("root")
);
