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
