Create Nextjs project :
CMD : npx create-next-app@latest .
CMD : npm run dev (to run)
--------------------------

- There are two types of router :
-- page (old version)
-- app (new version)

Two types of folder structure : 

(old : page router)
- src 
--- components
--- styles
--- pages
------| _app.js (main root)
------| index.js (default home page)

------| Folder1 (mainly this folder will become a route) i.e url/folder1/
---------- index.jsx (default this will run in this route)
---------- example.jsx
---------- example.jsx

------| Folder2 (mainly this folder will become a route)
---------- index.jsx (default this will run in this route)
---------- example.jsx
---------- example.jsx

(new : app router)
- app 
---| global.css
---| layout.js (default layout)
---| page.js (default home page)
---| components

---| Folder1 (this will become a route) 
------ layout.js 
------ page.js

---| Folder2 (this will become a route) 
------ layout.js 
------ page.js


Note: We can use both Page Router and App Router in the same project but App Router will get more priority. 

Learnings : 

- I can group route by using () but it will not impact routing
- root layout.jsx will be applied for whole project
- layout.jsx inside any route will be applied automatically and it will be applied for siblings routes as well
- if I add image like module, I don't need to mention width & height in Image Tag
- we can use  inside <Image fill={true}> but need to use Position: relative to parent container
- if I add any external Image then Base URL need to be added in next.config.js file first
- Context Api need to be used "use client"

Data fetching : (Data fetching is different for Page router and App router. Here I focused on App router)
- We can fetch data in both Client and Server component

In Client we can use: 
- Fetch in useEffect
- fetching library (React Query, SWR)
- In client side fetching : Component Load first then fetch the data

In Server we can :
- fetch data directly just making the component Async
- if data never changes then use (cache: 'force-cache')
- if data changes not too often  then use (next: {revalidate: 10})
- if data changes very frequently then use (cache: 'no-store')

----
- We can change page title for every page by doing this : 
	export const metadata = {
  		title: "Contact Page",
  		description: "This is contact page",
	};
----
- Get path : 
	import { usePathname } from "next/navigation";
	const pathname = usePathname();

- Search Param : 
	import { useSearchParams } from "next/navigation";

- Debounce library :
	wait till user stop typing 
	(npm i use-debounce) 

- onClick/ onChange :
	- write like this when you dont have any parameter : onClick={testFunction}
	- write like this when you have parameter : onClick={()=>testFunction(params)}


* In the pages directory, 'api' is a special folder. It is where API routes are defined, and files inside it map to serverless API endpoints.
* In the app directory, there is no special treatment for an 'api' folder. You can create any folder and name it as you wish.

#There are four main ways to communicate with data in Next.js:

1. Server Actions (When backend is integrated with Next.js) :
* Direct database operations without HTTP requests
* Marked with "use server"
example : 
	"use server"
	async function addUser(formData) {
		await db.users.create({ data: formData })
	}

2. Server Actions for External APIs :
* Used when backend is separate but you want to hide API routes
* Marked with "use server"
* Makes HTTP requests from server side
* Keeps sensitive data (tokens, URLs) private
example : 
	// actions/users.js
	"use server"
	export async function getUsers() {
		const response = await fetch(`${process.env.API_URL}/users`, {
			headers: { Authorization: `Bearer ${process.env.API_TOKEN}` }
		})
		return response.json()
	}

3. External API Calls from Client Components :
* Used when backend is separate from Next.js
* Makes HTTP requests using fetch/axios
* API routes are visible in browser network tab
Example:
	'use client'
	async function fetchUsers() {
		const response = await fetch('https://api.example.com/users')
		return response.json()
	}

4. Route Handlers (app/api) :
* Creates API endpoints within Next.js
* Can be called using HTTP requests (fetch/axios)
* Typically used when you want to expose APIs for external use
example :
	// app/api/users/route.js
	export async function GET() {
		const users = await db.users.findMany()
		return Response.json(users)
	}


#Next-Auth:
* <AuthProvider> is only required for client component so that we can use useSession() to get session value but in server component we can get session value in different way (src: Dave Gray)
