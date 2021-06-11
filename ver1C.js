
// If you don't want to put the JSX expression directly in
// the call to ReactDOM.render() as argument 1, you can put
// it in a variable 

const messageElement = 
    <div>
        <h1>Hello World</h1>
    </div>
;


ReactDOM.render(
    messageElement, 
    document.getElementById("root")
);
