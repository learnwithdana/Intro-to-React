
// This example just shows off what we've learned.  One component (App) glues together
// the markup rendered by the Header, MainSection, and Footer components

// You can use any names for the components you want!

// ReactDOM.render() at the bottom renders whatever App's render() returns

// NOTE:  don't freak out that I used React.Fragment in the App render.
// You could use a div if that makes you feel better!

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <MainSection />
                <Footer />
            </React.Fragment>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Front End Design Technologies</h1>
            </header>
        );
    }
}

class MainSection extends React.Component {
    render() {
        return (
            <main>
                <h2>HTML</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum eros justo, sit amet scelerisque sapien luctus a. Nulla facilisi. Maecenas tellus elit, commodo vitae risus id, egestas porta nulla. Nunc ullamcorper iaculis nibh molestie tristique.</p>
                <p>Ut tellus quam, condimentum et sapien sed, facilisis lobortis nunc. Nam lobortis ac massa id sagittis. Etiam imperdiet cursus est ac sollicitudin. Sed sit amet quam nec ex sodales fringilla sed aliquam tortor. Nam viverra malesuada est eget porta. Fusce eget venenatis elit, in tristique arcu. Quisque magna turpis, eleifend ut magna sit amet, dictum porttitor dolor.</p>

                <h2>CSS</h2>
                <p>Aenean a pretium eros, nec molestie ligula. Proin et molestie ipsum, sollicitudin dapibus turpis. Quisque sodales, est ac sodales maximus, eros nulla pulvinar justo, porttitor venenatis massa est non nibh. Proin convallis arcu venenatis risus consectetur, id scelerisque tortor fringilla. In sit amet sapien sem. Aenean scelerisque mi dui, euismod molestie ligula suscipit eget. </p>
                <p>Ut sed facilisis dui. Quisque cursus, neque vitae mollis finibus, purus risus vulputate risus, ut cursus est turpis eu libero. Etiam et odio nec ante ultrices egestas sed hendrerit ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin in luctus lectus. Nam ornare placerat nulla, quis lobortis nibh viverra ac. Aliquam congue nunc elit, vitae lobortis metus rhoncus vitae. Maecenas imperdiet et ante sit amet volutpat. Fusce pharetra vestibulum gravida. Etiam imperdiet nulla in fermentum maximus.</p>
            </main>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>Copyright &copy; 2021 by Dana</p>
            </footer>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);

