import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe,ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service'; 
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */ 

    @Get() //GET /users or Query parameter: /users?role=value
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        return this.userService.findAll(role)
    }

    @Get(':id') //GET /users/:id
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.userService.findOne(id) 
    }

    @Post() //POST /users
    create(@Body(ValidationPipe) createUserDto: CreateUserDto){
        return this.userService.create(createUserDto)
    }


    @Patch(':id') //PATCH /users/:id
    updateOne(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto){
        return this.userService.updateOne(id,updateUserDto)
    }

    @Delete(':id') //DELETE /users/:id
    deleteOne(@Param('id', ParseIntPipe) id: number){
        return this.userService.deleteOne(id)
    }


}
