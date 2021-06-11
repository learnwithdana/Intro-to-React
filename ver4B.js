
// In this example, we will generate a key attribute for the <li>
// elements so that React doesn't complain

// Note:  The key can be anything.  We will make it the text of the
// array element plus a hyphen plust the array index number

class ListApp extends React.Component {
  render() {

    // clean up reference to props using destructuring
    const { todos } = this.props;

    // generate an array of <li> elementts -- one for each item in the array
    // NOTE THE NEW KEY ATTRIBUTE
    let todoList = todos.map((element, index) => {
      return <li key={`${element}-${index}`}>{element}</li>;
    });

    return (
      <div>
        <p>Things to do:</p>
        <ul>{todoList}</ul>
      </div>
    );
  }
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
