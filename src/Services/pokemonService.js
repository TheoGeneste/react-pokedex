import axios from "axios";

// Récupere tous les pokémons depuis l'API PokeAPI
function getPokemons(){
    return axios.get("https://pokeapi.co/api/v2/pokemon-species?limit=500")
    // return axios.get("https://pokeapi.co/api/v2/pokemon")
}
function getPokemonById(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon-species/"+id)
    // return axios.get("https://pokeapi.co/api/v2/pokemon/"+id)
}

// Exporte toutes les fonctions crée au dessus afin de les utiliser dans nos pages/componenents
export default {
    getPokemons,
    getPokemonById
}