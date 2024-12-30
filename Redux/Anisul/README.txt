- Redux is a javascript library
- Redux used to manage states globally in medium/large project

Related to Redux :
- React-Redux
- Redux-toolkit
- Redux-Devtools

How works : 
- define state
- dispatch an action
- Reducer update state based on Action Type
- Store will update the view

Initial setup : 
- npm i redux
-------------
- Action (type and payload)
- Action only tell what task to do 
- Reducer actually do the task 
- Store :
-- need to create from redux
-- store subscribe (mainly generate output)
-- store dispatch action (mainly call Reducer function)
- combineReducers() to store multiple Reducer 

- middleware : redux-logger (to see log)

- middlware : redux-thunk (help to data fetching task)
-- normally Action return Object but thunk help to return function

React-Redux : 
-------------
- npm i redux
- npm i react-redux
- need to add 'store' in main.js inside <Provider>
- useSelector() to access initial value
- useDispatch() to dispatch action
- Data fetching :
    - required package : axios redux-thunk

Redux-Toolkit :
---------------
- npm install @reduxjs/toolkit
- npm i react-redux
- recomended folder structure : 
    --- src 
    ------ app
    ------ features
- Slice = collection of logic

Redux Toolkit (RTK): A wrapper around Redux designed to simplify common Redux tasks, reduce boilerplate code, and improve best practices. It is the official, recommended way to use Redux as of now.
