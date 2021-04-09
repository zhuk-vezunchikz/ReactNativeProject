import axios from 'axios';

export const getPockemonsRequest = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
}
