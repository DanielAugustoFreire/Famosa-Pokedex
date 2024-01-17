var new_html;

function iniciar(id)
{
    pokeapi.pegarPokemon(id)
        .then((detalhes_pokemon) => {
            const pokemon = converter_classe_detalhada(detalhes_pokemon)

            new_html = `
            <style>
            .content {
                background-image: url('/assets/images/pokedex_back.png');
                background-repeat: no-repeat;
                background-size: cover; 
                
            }
            .content{
                padding: 1rem;
                background-color: white;
                height: 100vh;
            }

            .pokemon-card{
                text-transform: capitalize;
            }
            </style>
        
            <div class="pokemon-card">
                <img src="${pokemon.image}" width="250px" height="250px" alt="Pikachu">
                <h1 class="pokemon-name">${pokemon.name}</h1>
                <p class="pokemon-type">Type:${pokemon.type}</p>
                <p class="pokemon-height">Height:${pokemon.altura} m</p>
                <p class="pokemon-wheight">Wheight:${pokemon.peso} Kg's</p>
                <a onclick="location.reload()">Voltar para a Pokedex</a>
            </div>
            `;
            return new_html
        }) 
        .then((html_pronto) => {
            const divzinha = document.getElementById(`aquele`)
            divzinha.innerHTML = html_pronto;
            console.log(divzinha)
        })
}