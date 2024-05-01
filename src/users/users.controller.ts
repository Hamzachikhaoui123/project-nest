import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dtos/createUserDto';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}

    @Post("/add")
    async addUser(@Body() createUserDto:CreateUserDto){
        return await this.userService.createUser(createUserDto);
    }
}
