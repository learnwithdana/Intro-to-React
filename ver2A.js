
// Rather than creating a bunch of variables that hold JSX expressions and
// creating a complex page that way, React lets us create a component that
// generates the JSX expression

// 1.  Create a class (start with a capital letter) that extends React.Component
// 2.  Write a render() method that returns the JSX
// 3.  Use HTML syntax <ComponentName /> to create the component and call it's render()

class HelloApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <HelloApp />, 
    document.getElementById("root")
);

