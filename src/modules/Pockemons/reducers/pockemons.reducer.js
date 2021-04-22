const initialState = {
    loading: false,
    pockemons: [],
};

function pockemonsReducer(state = initialState, action) {
    switch(action.type) {
        case "GET_STARTED": return {
            ...state,
            loading: true,
        };
        case "GET_POCKEMONS_SUCCESS": return {
            ...state,
            pockemons: action.payload
        };
        case "GET_FINISHED": return {
            ...state,
            loading: false
        }
        default: return state;
    }
}

export default pockemonsReducer;
