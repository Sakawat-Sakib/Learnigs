(Michael Guay)

Prisma
- npm i prisma -D
- npx prisma init (two file will create .env and prisma)
- put database url in .env
- need to create model inside schema.prisma file
- npx prisma migrate dev --name 'Anyname' (it will create table and SQL will be saved) | 'npx prisma db push' for MongoDB
- npx prisma migrate push --name 'Anyname' (it will create table and SQL will not be saved)
- if any change made in Schema we need to run 'npx prisma generate' then 'npx prisma migrate dev --name 'Anyname''

- seed.ts file inside prisma mainly use in development purpose to start with some data in database
- 'npx prisma db seed' to execute seed file


Relation
- 1 to 1
- 1 to many 
- many to many (don't have any foreign key)