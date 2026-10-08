import {
    BadRequestException,
    ConflictException,
    Injectable,
    Logger,
    OnModuleInit,
} from '@nestjs/common';
import { RegisterDto } from '../auth/dto/registerUser.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService implements OnModuleInit {
    private readonly logger = new Logger(UserService.name);

    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    ) { }

    async onModuleInit() {
        try {
            await this.userModel.syncIndexes();
        } catch (error) {
            const message =
                error instanceof Error ? error.message : 'Unknown index sync error';

            this.logger.error(
                `User indexes could not be synced. Clean existing duplicate emails, then rerun the app. ${message}`,
            );
        }
    }

    async createUser(registerUserDto: RegisterDto) {
        const normalizedEmail = registerUserDto.email?.trim().toLowerCase();
        const fname = registerUserDto.fname?.trim();
        const lname = registerUserDto.lname?.trim();
        const password = registerUserDto.password;

        if (!fname || !lname || !normalizedEmail || !password) {
            throw new BadRequestException(
                'fname, lname, email, and password are required',
            );
        }

        const existingUser = await this.userModel
            .exists({ email: normalizedEmail })
            .exec();

        if (existingUser) {
            throw new ConflictException('Email already exists');
        }

        try {
            return await this.userModel.create({
                ...registerUserDto,
                fname,
                lname,
                email: normalizedEmail,
                password,
            });
        } catch (error) {
            const e = error as { code?: number };

            if (e.code === 11000) {
                throw new ConflictException('Email already exists');
            }

            throw error;
        }
    }

    // createUser1(registerUserDto: RegisterDto){
    //     return {message: "user created"}
    // }
}
