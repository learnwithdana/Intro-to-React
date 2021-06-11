
// In this example, we illustrate how to
// CONDITIONALLY SHOW OR HIDE code.

// if the array doesn't contain any elements, we
// will show a paragraph indiciating "There are no list of things to do"

// In order to test this, we had to change the way React.DOM.render()
// worked.  It displays LisApp twice -- with two different lists.


class ListApp extends React.Component {
  render() {

    // clean up reference to props using destructuring
    const { todos } = this.props;

    // generate an array of <li> elementts -- one for each item in the array
    let todoList = todos.map((element, index) => {
      return <li key={`${element}-${index}`}>{element}</li>;
    });

    // Notice how we use the ternary operator to show different markup
    // depending on the LENGTH of the array todos

    // I surrounded the <p> and <ul> with React.Fragment so as not
    // to introduce another <div> in the DOM 
    return (
      <div>
        {
          todos.length == 0 ? (
            <p>There are no list of things to do.</p>
          ) : (
            <React.Fragment>
              <p>Things to do:</p>
              <ul>{todoList}</ul>
            </React.Fragment>
          )
        }

      </div>
    );
  }
}

//*****************************
// The data

let myToDos = ["learn React", "eat", "sleep", "play", "practice React"];

let yourToDos = [];

//*****************************
// Render the page

ReactDOM.render(
  <div>
      <p>The list below shows items:</p>
      <ListApp todos={myToDos} />    
      <hr />
      <p>The list below DOES NOT show items:</p>
      <ListApp todos={yourToDos} /> 
  </div>,
  document.getElementById("root")
);
