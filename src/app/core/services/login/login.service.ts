import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenResponse } from './response/token-response.interface';
import { LoginRequest } from './request/login-request.interface';

const URL = `${environment.baseUrl}`;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly _httpClient: HttpClient) {}

  public authService(request: LoginRequest): Observable<TokenResponse>{
    return this._httpClient.post<any>(`${URL}/login`,request);
  }
}
