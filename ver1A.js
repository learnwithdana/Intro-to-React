
// We learned that you use ReactDOM.render() to render content 
// in the <div> where id="root"

// The first argument to render() is some HTML (its not a string!) 
// in a special JavaScript extension called JSX
// and the second argument is the <div> in the HTML page where the
// rendered HTML goes

ReactDOM.render(
    <div><h1>Hello World</h1></div>, 
    document.getElementById("root")
);
