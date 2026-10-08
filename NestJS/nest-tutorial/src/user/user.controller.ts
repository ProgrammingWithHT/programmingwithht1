import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller('user')
export class UserController {

    constructor(private readonly userServices: UserService){};

    @Get()
    usersDetails(){
        return this.userServices.userDetails();
    }
}
