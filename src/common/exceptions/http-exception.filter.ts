import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const res = exception.getResponse();

    if (typeof res == 'object') {
      res['path'] = request.url;
      res['timestamp'] = new Date().toISOString();
      res['exceptionFilter'] = this.constructor.name;
      response.status(status).json(res);
      return;
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      // message,
      exceptionType: exception.constructor.name,
      exceptionFilter: this.constructor.name,
      exception: exception,
    });
  }
}
