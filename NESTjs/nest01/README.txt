(Dave Gray*)

- CMD : npm i -g @nestjs/cli
- CMD : nest new . (to create boilerplate in current directory)

- Nestjs build on express
- To run : npm run start:dev
- Nestjs has more organized code

- Flow : main.ts -> module -> Controller -> Service

- CMD : nest g module name (to create module)
- Need to add this thing inside newly created module 
    controllers: [],
    providers: []
- CMD : nest g controller name (to create controller)
- CMD : nest g service name (to create service/provider)
- CMD : nest g resource name (using this I can create rest api very easily)

- Controller : handle incoming request and return response
- GET Route with parameter put always at the bottom
- + sign convert string into number
- Providers will be service more often but it can be other thing as well i.e helper, factories

- pipes = one type of middleware
- ParseIntPipe covert string into number during parsing
- DTO = Data Transfer Object (input validation type)

- To use PartialType we need to install @nestjs/mapped-types as dev dependency
- PartialType make input field optional

- Install class-validator and class-transformer for validation
- Need to add 'ValidationPipe' inside @Body() to connect class-validator
- I can add different Http Exception i.e NotFoundException

Prisma
- npm i prisma -D
- npx prisma init (two file will create .env and prisma)
- put database url in .env
- need to create model inside prisma file
- npx prisma migrate dev --name 'Anyname' (it will create table and SQL will be saved)
- npx prisma migrate push --name 'Anyname' (it will create table and SQL will not be saved)
- if any change made in Schema we need to run 'npx prisma generate' then 'npx prisma migrate dev --name 'Anyname''
- Neon Tech Database is used in this project

To integrate database module with API module (module for crud functionality)
- create database module
- create database service
- exports: [DatabaseService] (in database module)
- import PrismaClient in database service
- write this code in database service :
    export class DatabaseService extends PrismaClient implements OnModuleInit {
        async onModuleInit() {
            await this.$connect()
        }
    }
- import database module in API module
- import Prisma in API controller
- import Prisma and database service in API service
- add this line in API service : 
    constructor(private readonly databaseService : DatabaseService){}


- app.enableCors() (open to everyone)
- app.setGlobalPrefix('api') (add prefix in the url)

- npm i @nestjs/throttler (mainly use to limit the request)
- import { ThrottlerModule, ThrottlerGuard }
- import { APP_GUARD }
- configure app.module file

- add this things in any particular module-controller to overcome throttler effect on that module
    import { Throttle, SkipThrottle } from '@nestjs/throttler';
    @SkipThrottle()
- we can use this on any specific route if we want throttler effect
    @SkipThrottle({default: false})