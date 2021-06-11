
// The code at the bottom pulls out the data from the JSX and puts it into variables!

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

// Put data in variables for use below!

let person1Name = "Dana Wyatt";
let person1BadgeNo = 12;
let person1TerminalDegree = {year:"1979", degree:"PhD"};

let person2Name = "Zachary Wyatt";
let person2BadgeNo = 13;
let person2TerminalDegree = {year:"2020", degree:"BBA"};

ReactDOM.render(
  <div>
    <NameMessage fullName={person1Name} badgeNo={person1BadgeNo} terminalDegree={person1TerminalDegree} />
    <br />
    <NameMessage fullName={person2Name} badgeNo={person2BadgeNo}  terminalDegree={person2TerminalDegree} />
  </div>,
  document.getElementById("root")
);
