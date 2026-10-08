import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
import bcrypt from 'bcrypt';


type RegisterAuth = {
    message: string,
}

@Injectable()
export class AuthService {
    // registerAuth() {
    //     throw new Error('Method not implemented.');
    // }

    constructor(private userService: UserService){};

    async registerUser(registerUserDto: RegisterDto){
        console.log('calling... registerUser');
        const saltRounds = 10;
        const password = registerUserDto.password?.trim();

        if (!password) {
            throw new BadRequestException('Password is required');
        }

        const hash = await bcrypt.hash(password, saltRounds);
        const user = await this.userService.createUser({...registerUserDto, password: hash});
        return user;
        // return {message: "User registered successfully"};
    }
    
    // registerAuth(registerUserDto: RegisterDto){
    //     // return this.userService.createUser();
    //     return {message: "User registered successfully"};
    // }

  
}
