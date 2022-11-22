const initialState = {
    authToken: null,
}

export default (state, action)=>{
    switch (action.type) {
        case 'LOGIN':
            return{
                ...state,
                authToken: action.payload
            }
            
        default:
            return state;
    }
}