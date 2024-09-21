import React, { useState } from 'react'



const UseTest = () => {

    const [count,setCount] = useState(0)

    function handleClick(){
        setCount(count+1)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default UseTest