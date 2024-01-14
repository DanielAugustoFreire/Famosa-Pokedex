const offset = 0;  
const limit = 100;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

function ConverterPokemonHtml(pokemon) {
    let tiposHtml = ''

    return `                
        <li class="pokemon ${pokemon.type}">
            <span class="numero">#${pokemon.id}</span>
            <span class="nome">${pokemon.name}</span>

            <div class="detalhes">
                
                <ol class="tipos">
                    ${pokemon.types.map((i) => `<li class="tipo ${i}">${i}</li>`).join(``)}
                </ol>

                <img src="${pokemon.image}" alt="${pokemon.name}">

            </div>
        </li>`
}   


const lista_no_html = document.getElementById(`listagem_pokemons`)

    pokeapi.pegarPokemons(offset,limit).then((lista_json) => {
    
        const new_html = lista_json.map(ConverterPokemonHtml).join(``) //Argumento para a funcao seria o lista_json
        lista_no_html.innerHTML += new_html

    })
    .catch((error)=> {console.error(error)})
    .finally(() => {console.log(`Req. Concluida`);})

//.then Se a req for sucesso
// Esse FETCH tem uma promisse de Resposta, essa resposta em `response`. no return response.json() temos uma promessa
// de retornar any, dai vei o JsonBody, que dentro tem coisas em json, e dentre essas coisas temos o array results
// que contem aquilo do qual temos interesse.
// Fazer esses returns evita triangulacao e ajuda a ler o codigo.

//.catch((error) se a req for um fracasso

//.finaly Isso daqui vai aparecer independene do sucesso ou do fracasso