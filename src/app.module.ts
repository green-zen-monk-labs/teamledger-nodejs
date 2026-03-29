import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { HealthController } from './modules/health/health.controller';
import { RequestIdMiddleware } from './common/middleware/request-id.middleware';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestIdMiddleware)
      .forRoutes(
        { path: '/', method: RequestMethod.ALL },
        { path: '/*path', method: RequestMethod.ALL },
      );
  }
}
