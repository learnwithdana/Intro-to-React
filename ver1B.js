
// We learned that you if you don't want to build HTML in the render()
// method, you can call React.createElement to create the <h2> with "Hello World"
// in it and then  put that element in a <div> in a separate call React.createElement

// My opinion... naw, I'll figure the other way out!

const messageElement = React.createElement("h1", null, "Hello World");
const containerElement = React.createElement("div", null, messageElement);

ReactDOM.render (
    containerElement,
    document.getElementById("root")
); 

