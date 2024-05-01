import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users';
import { Repository } from 'typeorm';
import { UserParams } from 'src/utils/utils';
@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private userRepository:Repository<Users>){}
    createUser(userParams :UserParams){
        const user=this.userRepository.create(userParams)
        user.createdAt=new Date()
        return this.userRepository.save(user)

    }
}
