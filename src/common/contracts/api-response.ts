import { ApiProperty } from '@nestjs/swagger';

export enum ApiResponseStatusEnum {
  OK = 'OK',
  ERROR = 'ERROR',
}

export class ApiResponseMeta {
  @ApiProperty({
    description: 'Status of the API response',
    enum: ApiResponseStatusEnum,
    example: ApiResponseStatusEnum.OK,
  })
  status: ApiResponseStatusEnum;

  @ApiProperty({
    description: 'HTTP status code',
    example: 200,
  })
  statusCode: number;

  @ApiProperty({
    description: 'Unique request identifier',
    example: '4a3e2b1f-b86b-4465-a914-b9d607063483',
  })
  requestId: string;

  @ApiProperty({
    description: 'Path of the API endpoint',
    example: '/api/health',
  })
  path: string;

  @ApiProperty({
    description: 'ISO timestamp when the response was generated',
    format: 'date-time',
    example: '2024-06-01T12:00:00Z',
  })
  timestamp: string;
}

export class ApiResponseSuccess<ApiResponseSuccessData> {
  @ApiProperty({
    description: 'Response data payload',
  })
  data: ApiResponseSuccessData;

  @ApiProperty({
    description: 'Metadata about the API response',
    type: ApiResponseMeta,
  })
  meta: ApiResponseMeta;
}

export class ApiResponseErrorDetail {
  @ApiProperty({
    description: 'Field name that caused the error',
    example: 'email',
  })
  field: string;

  @ApiProperty({
    description: 'Error message for the field',
    example: 'Email is required',
  })
  error: string;
}

export enum ApiResponseErrorCodeEnum {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  CONFLICT = 'CONFLICT',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  HTTP_ERROR = 'HTTP_ERROR',
}

export class ApiResponseErrorBody {
  @ApiProperty({
    description: 'Error code representing the type of error',
    enum: ApiResponseErrorCodeEnum,
    example: ApiResponseErrorCodeEnum.VALIDATION_ERROR,
  })
  code: ApiResponseErrorCodeEnum;

  @ApiProperty({
    description: 'Error message describing the error',
    example: 'Validation failed for field "email"',
  })
  message: string;

  @ApiProperty({
    description: 'Optional array of detailed error information',
    type: [ApiResponseErrorDetail],
    required: false,
  })
  details?: ApiResponseErrorDetail[];
}

export class ApiResponseError {
  @ApiProperty({
    description: 'Error body containing error details',
    type: ApiResponseErrorBody,
  })
  error: ApiResponseErrorBody;

  @ApiProperty({
    description: 'Metadata about the API response',
    type: ApiResponseMeta,
  })
  meta: ApiResponseMeta;
}
