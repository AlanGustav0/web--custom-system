// import { TokenService } from './../token/token.service';
// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class Interceptor implements HttpInterceptor {
//   constructor(private readonly _tokenService: TokenService) {}
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const request = this.setHeaderAuthorization(req);
//     return next.handle(request);
//   }

//   private setHeaderAuthorization(request: HttpRequest<any>): HttpRequest<any> {
//     const token = this._tokenService.getToken();
//     const newRequest = request.clone({
//       headers: request.headers.set('Authorization', token),
//     });

//     return newRequest;
//   }
// }
