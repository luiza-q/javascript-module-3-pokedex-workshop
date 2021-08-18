async function getAllPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=20";

  const response = await fetch(url);
  const { results } = await response.json();
  return results;
}

async function getOnePokemonSprite(url) {
  console.log("Here I will be returning a sprite from my Pokemon");

  // fetch the response from url
  // return one of the sprites we get
}

export { getAllPokemon, getOnePokemonSprite };
