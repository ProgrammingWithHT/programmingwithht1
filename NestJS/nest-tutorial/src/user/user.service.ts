import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
    userDetails(): User{
        return {name: "hamza", email: "hamza@gmail.com", password: "**********"}
    }
}
