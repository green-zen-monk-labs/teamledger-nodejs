import { Controller, Get } from '@nestjs/common';
import { HealthResponse } from './contracts/health.response';
import { ApiOkResponse, ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  @Get()
  @ApiOperation({
    summary: 'Health check',
    description: 'Returns the current status of the TeamLedger API.',
  })
  @ApiOkResponse({ type: HealthResponse })
  checkHealth(): HealthResponse {
    const timestamp = new Date().toISOString();

    return { status: 'OK', service: 'TeamLedger API', timestamp: timestamp };
  }
}
