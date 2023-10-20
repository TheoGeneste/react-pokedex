import axios from "axios";

function getGenerations(){
    return axios.get('https://pokeapi.co/api/v2/generation/')
}

function getGenerationByName(name){
    return axios.get("https://pokeapi.co/api/v2/generation/"+name)
}

export default {
    getGenerations,
    getGenerationByName
}