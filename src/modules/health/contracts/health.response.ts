import { ApiProperty } from '@nestjs/swagger';

export class HealthResponse {
  @ApiProperty({
    description: 'Current status of the API',
    enum: ['OK'],
    example: 'OK',
  })
  status: 'OK';

  @ApiProperty({
    description: 'Name of the service',
    example: 'TeamLedger API',
  })
  service: string;

  @ApiProperty({
    description: 'ISO timestamp when the response was generated',
    format: 'date-time',
    example: '2024-06-01T12:00:00Z',
  })
  timestamp: string;
}
