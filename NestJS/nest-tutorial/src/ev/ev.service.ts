import { Injectable } from '@nestjs/common';
import {ConfigService } from '@nestjs/config';

@Injectable()
export class EvService {
    // constructor(private configureService: ConfigureService){};
    
constructor(private configService: ConfigService) {}


    getDbUrl(){
        
        return this.configService.get<string>('DATABASE_URL')
    }

}
