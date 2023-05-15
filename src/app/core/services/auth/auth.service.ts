import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenResponse } from '../interfaces/response/token-response.interface';
import { SigninRequest } from '../interfaces/request/signin-request.interface';

const URL = `${environment.baseUrl}`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly _httpClient: HttpClient) {}

  public auth(request: SigninRequest): Observable<TokenResponse>{
    return this._httpClient.post<any>(`${URL}/login`, request);

  }
}
