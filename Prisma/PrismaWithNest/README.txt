(Michael Guay)

Prisma
- npm i prisma -D
- npx prisma init (two file will create .env and prisma)
- put database url in .env
- need to create model inside schema.prisma file
- npx prisma migrate dev --name 'Anyname' (it will create table and SQL will be saved)
- npx prisma migrate push --name 'Anyname' (it will create table and SQL will not be saved)
- if any change made in Schema we need to run 'npx prisma generate' then 'npx prisma migrate dev --name 'Anyname''