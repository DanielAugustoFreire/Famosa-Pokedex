
const pokeapi = {}

function converter_classe_detalhada(detalhes){
    const pokemon = new Pokemon()
    pokemon.name = detalhes.name;
    pokemon.id = detalhes.id;
    pokemon.image = detalhes.sprites.other.dream_world.front_default;

    pokemon.altura = detalhes.height /10;
    pokemon.peso = detalhes.weight / 10


    const types = detalhes.types.map((tipagem) => tipagem.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type =type;

    return pokemon;
}

pokeapi.pegardetalhes = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(converter_classe_detalhada)
}

pokeapi.pegarPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(url)
            .then((response) => {return response.json()})                         
            .then((jsonBody) => {return jsonBody.results})
            .then((pokemons) => pokemons.map(pokeapi.pegardetalhes))
            .then((detalhes_requisitados) => Promise.all(detalhes_requisitados))
            .then((detalhes_pokemons) => detalhes_pokemons)
}   

pokeapi.pegarPokemon = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
            .then((response) => {return response.json()})                         
            .then((jsonBody) => {return jsonBody})
}   
