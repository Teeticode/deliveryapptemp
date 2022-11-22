const initialState = {
    authToken: null,
}

export default (state, action)=>{
    switch (action.type) {
        case 'LOGIN':
            return{
                authToken: action.payload
            }
            
    
    }
}