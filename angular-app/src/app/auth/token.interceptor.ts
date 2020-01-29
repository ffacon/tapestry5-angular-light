import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';


import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public userSrv: UserService, public router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if ( this.userSrv.getTokenAccess() !== undefined ) {

        request = request.clone({
            setHeaders: {
                Authorization: `${this.userSrv.getTokenAccess()}`
            }
        });
    }
    return next.handle(request).pipe( tap(() => {},
    (err: any) => {
    if (err instanceof HttpErrorResponse) {
      if (err.status !== 401) {
        return;
      }
      this.router.navigate(['login']);
      }
    }));

  }
}
