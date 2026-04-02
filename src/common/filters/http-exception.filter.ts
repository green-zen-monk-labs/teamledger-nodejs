import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiResponseErrorCodeEnum } from '../contracts/api-response';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function getErrorMessage(errorResponse: unknown): string {
  if (typeof errorResponse === 'string') {
    return errorResponse;
  }

  if (!isRecord(errorResponse)) {
    return 'Unexpected error';
  }

  const { message } = errorResponse;

  if (typeof message === 'string') {
    return message;
  }

  if (Array.isArray(message) && message.every((item): item is string => typeof item === 'string')) {
    return message.join(', ');
  }

  return 'Unexpected error';
}

@Catch()
export class GlobalHttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const isHttpException = exception instanceof HttpException;

    const status = isHttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse: unknown = isHttpException
      ? exception.getResponse()
      : { message: 'Internal server error' };

    const message = getErrorMessage(errorResponse);

    response.status(status).json({
      error: {
        code: isHttpException
          ? ApiResponseErrorCodeEnum.HTTP_ERROR
          : ApiResponseErrorCodeEnum.INTERNAL_ERROR,
        message,
      },
      meta: {
        statusCode: status,
        path: request.url,
        requestId: request.requestId ?? 'n/a',
        timestamp: new Date().toISOString(),
      },
    });
  }
}
