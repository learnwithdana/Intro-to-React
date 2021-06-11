
// You can use **object destructuring** (an ES6 topic) in a component to use
// a shorter name for the props.  It puts the props into local variables.

// ex:  const {fillName, badgeNo} = this.props
// takes the properties and puts them in variables of the same name

class NameMessage extends React.Component {
  render() {
    // process the props
    const { fullName, badgeNo } = this.props;

    // render the JSX
    return (
      <p>
        Thank you, {fullName}, for joining us! 
        Your badge number is: {badgeNo}.
      </p>
    );
  }
}

ReactDOM.render(
  <div>
    <NameMessage fullName={"Dana Wyatt"} badgeNo={12}  />
    <NameMessage fullName={"Zachary Wyatt"} badgeNo={13} />
  </div>,
  document.getElementById("root")
);