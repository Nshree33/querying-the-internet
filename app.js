document.getElementById("userForm").addEventListener("submit", handleForm);
function handleForm(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const itemsNumber = formData.get("itemsNumber");
    console.log("itemsNumber", itemsNumber);
    fetchPokemonList(itemsNumber);
}

async function fetchPokemonList(itemsNumber) {
    try {
        console.log(itemsNumber);
        const response =await fetch(`https://pokeapi.co/api/v2/ability/?limit=${itemsNumber}`);
        console.log(pokemonList);

        if(!response.ok) {
            throw new Error("could not fetch resource");
        }

        const List = await response.json();
        console.log(List);
        }
        catch(error){
            console.error(error);
        }
    }
    //Pokemon Ability List
    const pokemonList = document.getElementById("pokemonList");
    //const itemsList = 

    async function fetchData() {
        console.log("fetching data");
        try{
            const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            console.log(pokemonName);

            if(!response.ok){
                throw new Error("could not fetch resource");
            }

            const data = await response.json();
            /*const pokemonSprite = data.sprites.front_default;
            const imgElement = document.getElementById("pokemonSPrite"); */
            console.log(data);
        }
        catch(error){
            console.error(error);
        }
    }

/*fetchData();

    async function fetchData() {
        try{
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

            if(!response.ok){
                throw new Error("could not fetch resource");
            }

            const data = await response.json();
            console.log(data);
        }
        catch(error){
            console.error(error);
        }
    } */

    /* fetch ("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(data => console.log(data.id))
    .catch(error => console.error(error));
 */
