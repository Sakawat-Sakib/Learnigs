import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todosConstant";

const initialSate = {
    isLoading : false,
    todos: [],
    error: null
}

const todosReducer = (state = initialSate, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
                return {
                    ...state,
                    isLoading : true,
                }
        
        case GET_TODOS_SUCCESS:
                return {
                    
                    isLoading : false,
                    todos : action.payload,
                    error: null
                }
            

        case GET_TODOS_FAILED:
                return {

                    isLoading: false,
                    error : action.payload,
                    todos : []
                }
            break;
    
        default:
            return state
            
    }
}

export default todosReducer