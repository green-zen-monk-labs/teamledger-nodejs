import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { Observable, map } from 'rxjs';
import { ApiResponseStatusEnum, ApiResponseSuccess } from '../contracts/api-response';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept<T>(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<T | ApiResponseSuccess<T>> {
    const timestamp = new Date().toISOString();
    const request = context.switchToHttp().getRequest<Request>();
    const path = request.url;
    const requestId = request.requestId ?? 'n/a';

    if (path.startsWith('/api/health')) {
      return next.handle();
    }

    return next.handle().pipe(
      map(
        (data: T): ApiResponseSuccess<T> => ({
          data,
          meta: {
            status: ApiResponseStatusEnum.OK,
            statusCode: 200,
            path,
            requestId,
            timestamp,
          },
        }),
      ),
    );
  }
}
