
// How do you access properties in a complex "prop" passed to the component?
// Just use dot notation like in JavaSCript

class NameMessage extends React.Component {
  render() {
    // process the props
    const {fullName, badgeNo, terminalDegree} = this.props;

    // render the JSX
    return (
      <div>
      <p>
        Thank you, {fullName}, for joining us! 
        Your badge number is: {badgeNo}.
      </p>
      <p>
        Looks like you earned a {terminalDegree.degree} in {terminalDegree.year}!
      </p>
      </div>

    );
  }
}


ReactDOM.render(
  <div>
    <NameMessage fullName={"Dana Wyatt"} badgeNo={12} terminalDegree={{year:"1979", degree:"PhD"}} />
    <br />
    <NameMessage fullName={"Zachary Wyatt"} badgeNo={13}  terminalDegree={{year:"2020", degree:"BBA"}} />
  </div>,
  document.getElementById("root")
);

// See next example if the terminalDegree code confuses you