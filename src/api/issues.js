
const baseUrl = 'https://pokeapi.co/api/v2/';

export const getPockemonsRequestConfig = () => {
    return {
        url: baseUrl + 'pokemon?limit=100&offset=200',
        method: 'GET'
    }
}

export const getTargetPockemonRequestConfig = (url) => {
    return {
        url: url,
        method: 'GET'
    }
}
