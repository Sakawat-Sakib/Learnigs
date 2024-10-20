const {createStore, applyMiddleware} = require('redux')
const { default: logger } = require('redux-logger')


const ADD_USER = "ADD USER"

//state
const initialUsersState = {
    name : ["sakib"],
    age : [27]
}


//Action
const addUser = (name,age) => {
    return {
        type: ADD_USER,
        payload : {name: name, age:age}
    }
}
//Reducer
const addUserReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                name : [...state.name, action.payload.name],
                age : [...state.age, action.payload.age]
            }
            break;
    
        default:
            return state
            break;
    }
}

//Store
const store = createStore(addUserReducer, applyMiddleware(logger))
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addUser("rahim", 34))