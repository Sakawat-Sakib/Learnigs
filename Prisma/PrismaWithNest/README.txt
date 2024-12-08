(Michael Guay)

------------------------------
Prisma
- npm i @prisma/client 
- npm i prisma -D

- npx prisma init (two file will create .env and prisma)
-- put database url in .env
-- need to create model inside schema.prisma file

For SQL
- npx prisma migrate dev --name 'Anyname' (it will create table and SQL will be saved) |  for MongoDB
- npx prisma migrate push --name 'Anyname' (it will create table and SQL will not be saved)
- if any change made in Schema we need to run 'npx prisma generate' then 'npx prisma migrate dev --name 'Anyname''

For MongoDB
- 'npx prisma db push' mainly update Database
- 'npx prisma generate' mainly update Prisma Client (Prisma Client is the media between Database and Backend)
----------------------------

- seed.ts file inside prisma mainly use in development purpose to start with some data in database
- 'npx prisma db seed' to execute seed file


Relation
- 1 to 1 (need to add @unique in oneside)
- 1 to many 
- many to many (don't have any foreign key)

Note : 
- in 1 to many (many things need to write in many)
- in 1 to 1 (similar things need to write in both)
