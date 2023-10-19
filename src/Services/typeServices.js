import axios from "axios";

function getTypeById(id){
    return axios.get("https://pokeapi.co/api/v2/type/"+id)
}

export default {
    getTypeById
}