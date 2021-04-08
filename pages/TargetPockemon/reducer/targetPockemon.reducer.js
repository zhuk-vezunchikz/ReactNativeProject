const initialState = {
    targetPockemon: []
}

function targetPockemonReducer(state = initialState, action) {
    switch(action.type) {
        case 'TARGET_POCKEMON': return  {
            ...state,
            targetPockemon: action.payload
        }
        default: return state;
    }
}

export default targetPockemonReducer;
