import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    getStatus() {
        return this.isConntected? 'Connected': 'Disconnect';
    }
    private isConntected: boolean = false;

    onModuleInit(){
        this.isConntected = true;
        console.log("Database Connected! ",this.isConntected);
    }

    onApplicationShutdown(signal: string) {
        this.isConntected = false;
        console.log(`Database Disconnected due to app shutdown. Signal ${signal}`);
    }

}
