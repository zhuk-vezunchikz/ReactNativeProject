export const getStarted = () => {
    return {type: "GET_STARTED"}
}

export const getFinished = () => {
    return {type: "GET_FINISHED"}
}

export const getPockemonsSuccess = (pockemons) => {
    return {type: "GET_POCKEMONS_SUCCESS", payload: pockemons}
}


