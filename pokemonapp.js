
// This is MY implementation of the Pokemon app

// This is the "main" component used in ReactDOM.render() below.
// It assembles the output rendered by Header and PokemonList components 
// and returns it to ReactDOM.render()

class PokemonApp extends React.Component {
  render() {

    const { header, pokemons } = this.props;

    return (
      <div>
        <Header header={header} />
        <PokemonList pokemons={pokemons} />
      </div>
    );
  }
}

// This assembles the "header" information on the page

class Header extends React.Component {
  render() {

    const { header } = this.props;

    return (
      <header>
        <h1>{header.name}'s Pokemon App</h1>
        <h2>{header.description}</h2>
        <ul>
          {header.menu.map((element, index) => (
            <li key={`${element}-${index}`}>{element}</li>
          ))}
        </ul>
      </header>
    );
  }
}

// This generates the list of pokemon

class PokemonList extends React.Component {
  render() {

    const { pokemons } = this.props;

    // generate the array of <li> elements for each item in the array
    const pokemonUL = (
      <ul>
        {pokemons.map((element, index) => {
          console.log(element)
          return (
            <li key={`${element.name}-${index}`}>
              <h3>{element.name}</h3>
              <img src={element.imgSrc} />
              {element.color.name ? (
                <p>Color: {element.color.name}</p>
              ) : (
                <p>No pokemon color available.</p>
              )}
            </li>
          );
        })}
    </ul>  
    );

    return (
      <main>
        <h2>Here are my favorite pokemons:</h2>
        {pokemons.length === 0 ? (
          <p>No pokemons in list.</p>
        ) : (
          pokemonUL
        )} 
      </main>
    );
  }
}

const pokemons = [{
    name: "Bulbasaur",
    color: {
      name: "green",
      url: "https://pokeapi.co/api/v2/pokemon-color/1/",
    },
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    name: "Charmeleon",
    color: {
      name: "blue",
      url: "https://pokeapi.co/api/v2/pokemon-color/5/",
    },
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    name: "Charizard",
    color: {
      name: "yellow",
      url: "https://pokeapi.co/api/v2/pokemon-color/6/",
    },
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    name: "Weepinbell",
    color: {
      name: undefined,
      url: "https://pokeapi.co/api/v2/pokemon-color/70/",
    },
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
  },
  {
    name: "Slowbro",
    color: {
      name: "pink",
      url: "https://pokeapi.co/api/v2/pokemon-color/80/",
    },
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
  },
];

const header = {
  name: "Dana",
  description: "This is the best Pokemon App ever!  Why?",
  menu: ["It is web based", "I wrote it", "I used React", "It works"],
};

ReactDOM.render(
  <PokemonApp header={header} pokemons={pokemons} />,
  document.getElementById("root")
);

