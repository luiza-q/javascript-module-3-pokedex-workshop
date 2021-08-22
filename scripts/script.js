import { getAllPokemon, getOnePokemonSprite } from "./api.js";

async function createPokemonImage(url) {
  const pokemonImage = document.createElement("img");
  pokemonImage.src = await getOnePokemonSprite(url);
  return pokemonImage;
}

function createPokemonLink(name, url) {
  const pokemonLink = document.createElement("a");
  pokemonLink.href = url;
  pokemonLink.textContent = name;
  return pokemonLink;
}

async function createPokemon(name, url) {
  const newPokemon = document.createElement("div");
  newPokemon.appendChild(await createPokemonImage(url));
  newPokemon.appendChild(document.createElement("br"));
  newPokemon.appendChild(createPokemonLink(name, url));

  return newPokemon;
}


async function init() {
  const root = document.getElementById("root");
  const pokemon = await getAllPokemon();
  pokemon.forEach(async ({ name, url }) => {
    root.appendChild(await createPokemon(name, url))
  });
}

init();