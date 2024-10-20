const {createStore, combineReducers} =  require('redux')

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"

const ADD_PEOPLE = "ADD_PEOPLE"

// Sate 

const initialCounterState = {
    count: 0,
}

const initialPeoples = {
    peoples: ["Sakib"]
}



// Action

const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
}

const increamentByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value,
    }
}

const addPeopleName = (value) => {
    return {
        type: ADD_PEOPLE,
        payload: value,
    }
}

// Reducer

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT : 
                return {
                   ...state, //if there multiple value in state
                    count: state.count+1
                }
                break;
        case DECREMENT :
            return {
                ...state, //if there multiple value in state
                count: state.count-1
            }
            break;
        case INCREMENT_BY_VALUE : 
            return {
                ...state,
                count: state.count + action.payload,
            }
            break;
        default:
            return state;
            break;

    }
}

const peopleReducer = (state= initialPeoples, action) =>{
    switch (action.type) {
        case ADD_PEOPLE:
            return {
                peoples: [...state.peoples, action.payload]
            }
            break;
    
        default:
            return state;

            break;
    }
}


const rootReducer = combineReducers({
    counterR: counterReducer,
    peopleR: peopleReducer,
})
// Store - getState(), dispatch(), subscribe()

const store = createStore(rootReducer)

store.subscribe(()=>{
    console.log(store.getState()) 
})

// dispatch action
store.dispatch(incrementCounter()) // mainly call the Reducer function with parameter
store.dispatch(increamentByValue(5))

store.dispatch(addPeopleName("rahim"))


