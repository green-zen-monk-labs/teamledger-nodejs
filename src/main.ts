import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { GlobalHttpExceptionFilter } from './common/filters/http-exception.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Observable, Subject, of } from 'rxjs';
import { tap, map, filter, take, finalize, delay, switchMap, debounceTime } from 'rxjs/operators';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new GlobalHttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('TeamLedger API')
    .setDescription('Public REST API for the TeamLedger application')
    .setVersion(process.env.APP_VERSION ?? 'dev')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
//bootstrap();

const query$ = new Subject<string>();

function fakeApi(q: string) {
  return of(`result for: ${q}`).pipe(delay(2000));
}

query$
  .pipe(
    tap(q => console.log('query:', q)),
    debounceTime(3000),
    switchMap(q => fakeApi(q)) // a korábbit cancel-eli
  )
  .subscribe(res => console.log('API:', res));

// „felhasználó gépel”
query$.next('a');
setTimeout(() => query$.next('ab'), 200);
setTimeout(() => query$.next('abc'), 400);
