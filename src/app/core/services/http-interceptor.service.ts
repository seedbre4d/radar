import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/API/services/services/loading.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.set(true);
    console.log('req');
    return next
      .handle(req)
      .pipe(finalize(() => this.loadingService.set(false)));
  }
}
