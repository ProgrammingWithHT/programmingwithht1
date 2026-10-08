import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction){
    // console.log(`[${req.method}] -- [${req.url}]`);
    console.log(`[${req.method}] -- [${req.originalUrl}]`);  //give complete path

    next();  //middleware done it work now go to next controller otherwise execution stuck here not go to next
  }
}
