import { getAllPokemon, getOnePokemonSprite } from "./api.js";

async function init() {
  const root = document.getElementById("root");
  root.textContent = "Hello world again!";
  const newstuff = document.createElement("p");
  root.appendChild(newstuff);
  const image = document.createElement("img");
  image.src =
    "https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png";
  root.appendChild(image);

  const pokemon = await getAllPokemon();

  pokemon.forEach(async ({ name, url }) => {
    const newPokemon = document.createElement("div");
    const pokemonLink = document.createElement("a");
    pokemonLink.href = url;
    pokemonLink.textContent = name;
    newPokemon.appendChild(pokemonLink);
    root.appendChild(newPokemon);

    const spriteUrl = await getOnePokemonSprite(url);
    // here we will use the sprite url to create an image
    console.log(
      "Here I will be creating an image with the sprite returned by getOnePokemonSprite"
    );
  });
}

init();
