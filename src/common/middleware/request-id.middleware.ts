import { Injectable, NestMiddleware } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestIdMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    const incomingId = req.headers['x-request-id'];

    req['requestId'] = typeof incomingId === 'string' ? incomingId : randomUUID();

    next();
  }
}
