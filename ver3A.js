
// Here's where we learned you can pass data to a component.  That data is called
// "props".  Each prop has a name.  You pass the data when you create the component
// ex:  <NameMessage fullName={"Dana Wyatt"} badgeNo={12} />

// In the example above, fullName and badgeNo are the prop names and "Dana Wyatt" 
// and 12 are the values  NOTE:  The { } are required!

// Inside the component, you reference the props sent using this.props.prop-name 
// where prop-name is the property name
// ex:  this.props.fullName and this.props.badgeNo

class NameMessage extends React.Component {
  render() {
    return (
      <p>
        Thank you, {this.props.fullName}, for joining us! 
        Your badge number is: {this.props.badgeNo}.
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

/*
Alternatively, you could have used the fragment to keep the
extra div out of the markup!

ReactDOM.render(
  <React.Fragment>
    <NameMessage fullName={"Dana Wyatt"} badgeNo={12}  />
    <NameMessage fullName={"Zachary Wyatt"} badgeNo={13} />
  </React.Fragment>,
  document.getElementById("root")
);
*/