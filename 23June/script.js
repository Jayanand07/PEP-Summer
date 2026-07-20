














































































































































const pokeApi = " https://pokeapi.co/api/v2/pokemon/Pikachu";

let pokObject = {};

fetch(pokeApi)
.then((d) => {
    console.log(d);
    return d.json();
})
.then((data) => {
    console.log(data);
    pokObject = data;
})
.then(() => {
    const pokemonDiv = document.getElementById("pokemon");
    pokemonDiv.innerHTML = `
        <h2>${pokObject.name}</h2>
        <img src="${pokObject.sprites.other["official-artwork"].front_default}" alt="${pokObject.name}" />
    `;
})

document.getElementById("pokemonInput").addEventListener("input", (event) => {
    console.log(event.target.value);
})