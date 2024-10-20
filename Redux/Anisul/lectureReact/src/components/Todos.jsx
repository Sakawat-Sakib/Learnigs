import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../services/actions/todosAction'

const Todos = () => {
    const {isLoading, todos, error} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllTodos())
    },[])
   
    
  return (
    <>
        <h2>Data fetching using Redux</h2>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>{error.message}</h3>}
        <section>
            {todos && todos.map((todo)=>{
                return <p>{todo.title}</p>
            })}
        </section>
    </>
  )
}

export default Todos