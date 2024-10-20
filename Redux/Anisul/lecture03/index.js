const { default: axios } = require('axios')
const {createStore, applyMiddleware} = require('redux')
const thunkMiddleware  = require('redux-thunk');

const apiUrl = "https://jsonplaceholder.typicode.com/todos"
//constant
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILED = "GET_TODOS_FAILED"

// state
const initialTodoState = {
    todos : [],
    isLoading : false,
    error : null
}

//action

const getTodosReq = () => {
    return {
        type: GET_TODOS_REQUEST,
    }
}

const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload : error
    }
}

const getTodosSuc = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}

// reducer

const todosReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading : true
            }
            break;
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading : false,
                todos : action.payload
            }
            break;
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading : false,
                error : action.payload
            }
            break;
    
        default:
            return state
            break;
    }
}
// async Action

const fetchData = () => {
    return (dispatch)=>{

        dispatch(getTodosReq()) //by default this will pass to Reducer

        axios.get(apiUrl)
        .then((res)=>{
            const todos = res.data
            const title = todos.map((item)=>{
                return item.title
            }) 

            dispatch(getTodosSuc(title)) // then this will pass
        })
        .catch((error)=>{
            const err = error.message;
            dispatch(getTodosFailed(err)) // or this will pass   
        })
    }
}

//store
const store = createStore(todosReducer,applyMiddleware(thunkMiddleware.thunk))
store.subscribe(()=>{
    console.log(store.getState());
    
})

store.dispatch(fetchData())