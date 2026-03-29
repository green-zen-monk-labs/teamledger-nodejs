import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { ApiResponseStatusEnum, ApiResponseSuccess } from '../contracts/api-response';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<object> {
    const timestamp = new Date().toISOString();
    const request = context.switchToHttp().getRequest();
    const path = request.url;

    if (path.startsWith('/api/health')) {
      return next.handle();
    }

    return next.handle().pipe(
      map(
        (data): ApiResponseSuccess<any> => ({
          data,
          meta: {
            status: ApiResponseStatusEnum.OK,
            statusCode: 200,
            path: request.url,
            requestId: request.requestId ?? 'n/a',
            timestamp: timestamp,
          },
        }),
      ),
    );
  }
}
