
// Here we learned you can't use class= in the JSX -- instead you
// have to use JavaScript style names for CSS properies
// see:  https://www.dummies.com/web-design-development/javascript/converting-css-property-names-to-javascript/

// PS:  The CSS rule is in the header of the page in this example

let styledElement = (
    <div>
        <p className="red">This is a test of a CSS class that turns text red</p>
    </div>
);

ReactDOM.render(
    styledElement, 
    document.getElementById("root")
);
