import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class GlobalHttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const isHttpException = exception instanceof HttpException;

    const status = isHttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse = isHttpException
      ? exception.getResponse()
      : { message: 'Internal server error' };

    const message =
      typeof errorResponse === 'string'
        ? errorResponse
        : ((errorResponse as any).message ?? 'Unexpected error');

    response.status(status).json({
      error: {
        code: isHttpException ? 'HTTP_ERROR' : 'INTERNAL_ERROR',
        message,
      },
      meta: {
        statusCode: status,
        path: request.url,
        requestId: (request as any).requestId ?? 'n/a',
        timestamp: new Date().toISOString(),
      },
    });
  }
}
