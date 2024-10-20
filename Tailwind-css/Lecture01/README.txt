(Net Ninja*)
- Tailwind css is mobile first approach

Setup: (Setup followed from Dave Gray)
- CMD: npx tailwindcss init
- create src and build folder
- create index.html file in build folder
- write this in tailwind.config.js file : 
    './build/*.html'
- create input.css file in src 
- add three line of code
- then CMD: npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch (I can add this line in package.json for easy use)


- I can add custom code in input.css
- favicon.ico need to add in build file during deployment but it should be present in root during development

- I can add custom class in input.css with @apply
- I can extend css class in tailwind.config.js file
- to add custom font I need to import that font in input.css also need to add font name in tailwind.config.js 


- Use heroicons for icon

- every time I made any changes in tailwind.config.js or input.css file I need to build again

---- Use cases :
----------------

- overflow-hidden : clip any content within an element that overflows the bounds of that element 