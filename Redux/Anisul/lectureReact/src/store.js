import {createStore, applyMiddleware} from "redux"
import * as thunkMiddleware  from 'redux-thunk';
import counterReducer from "./services/reducers/counterReducer"
import todosReducer from "./services/reducers/todosReducer"


//const store = createStore(counterReducer)

const store = createStore(todosReducer,applyMiddleware(thunkMiddleware.thunk))

export default store