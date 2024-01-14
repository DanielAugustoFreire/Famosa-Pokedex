const lista_no_html = document.getElementById(`listagem_pokemons`)
const botao_mais = document.getElementById(`botao`)
const limit = 20;
let offset = 0;

loadpokemon(offset,limit)

function loadpokemon(offset, limit)
{
    pokeapi.pegarPokemons(offset,limit).then((lista_json) => {
    
        const new_html = lista_json.map((pokemon) => `        
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
        ).join(``) 

        lista_no_html.innerHTML += new_html
    })
    .catch((error)=> {console.error(error)})
    .finally(() => {console.log(`Req. Concluida`);})    
}

botao_mais.addEventListener(`click`, () => {
    offset += limit
    loadpokemon(offset, limit)
})


//.then Se a req for sucesso
// Esse FETCH tem uma promisse de Resposta, essa resposta em `response`. no return response.json() temos uma promessa
// de retornar any, dai vei o JsonBody, que dentro tem coisas em json, e dentre essas coisas temos o array results
// que contem aquilo do qual temos interesse.
// Fazer esses returns evita triangulacao e ajuda a ler o codigo.

//.catch((error) se a req for um fracasso

//.finaly Isso daqui vai aparecer independene do sucesso ou do fracasso