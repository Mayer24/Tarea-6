// P O K E M O N E S 
// Arreglos de strings de pokemones
let pokemon = [

    {nombre: 'Pikachu', tipo: 'Electrico'},
    {nombre: 'Charmander', tipo: 'Fuego',},
    {nombre: 'Bulbasaur', tipo: 'Planta'},
    {nombre: 'Squirtle', tipo: 'Agua'},
    ];

//ciclo for
    for (let i = 0; i < pokemon.length; i++) {
    }

//aplicación de método map con return de elementos en mayúscula
const pokemon2 = pokemon.map((element, index, array) => {
    return element.nombre.toUpperCase()
})
console.log('Retorno en mayúsculas: ', pokemon2)


//Arreglos de objetos de pokemones
let pokemones = [

    {nombre: 'Pikachu', tipo: 'Electrico'},
    {nombre: 'Charmander', tipo: 'Fuego',},
    {nombre: 'Bulbasaur', tipo: 'Planta'},
    {nombre: 'Squirtle', tipo: 'Agua'},
    {nombre: 'Charmeleon', tipo: 'Fuego'},
    {nombre: 'Weedle', tipo: 'bicho'},
    {nombre: 'Charizard', tipo: 'Fuego'}

    ]
//aplicación de filter para seleccionar pokemones de fuego
const pokemonesFuego = pokemones.filter(pokemon => pokemon.tipo ==="Fuego")

console.log('Pokemones de Fuego: ', pokemonesFuego)