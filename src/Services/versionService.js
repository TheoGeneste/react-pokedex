import axios from "axios";

function getVersions() {
    return axios.get("https://pokeapi.co/api/v2/version?limit=100")
}
function getVersionByID(id) {
    return axios.get("https://pokeapi.co/api/v2/version/"+id)
}
function getVersionGroupByID(name) {
    return axios.get("https://pokeapi.co/api/v2/version-group/"+name)
}

export default {
    getVersions,
    getVersionByID,
    getVersionGroupByID
}