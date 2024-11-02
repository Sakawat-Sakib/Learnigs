React Install :
method 1 : npm init react-app .
method 2 : npm create vite@latest .

Common Folder Structure : 
- public
- src
--- [assets]
--- [components]
--- [context]
--- [pages]

--- App.jsx
--- index.css
--- main.jsx

############# Random Lesson: 
- '++' don't work in State function i.e setCount((count)=> count++) instead write : setCount((count)=> count+1)

- onClick/ onChange :
	- write like this when you dont have any parameter : onClick={testFunction}
	- write like this when you have parameter : onClick={()=>testFunction(params)}

- useNavigate hook : to redirect on another page (Programmatic navigation)
- Navigate Component : to redirect on another page (Declarative navigation)
- <Outlet/> : 

- Any thing derived from a state variable managed by a hook (like useState, useReducer, or a custom hook), when that state variable updates, React will automatically trigger a re-render of the component.