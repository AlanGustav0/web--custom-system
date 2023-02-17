import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { SignupRequest } from '../interfaces/request/signup-request.interface';

const URL = `${environment.baseUrl}`;
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private readonly _httpClient: HttpClient) {}

  public signup(user: SignupRequest): Observable<any> {
    return this._httpClient.post<any>(
      `${URL}/usuario/cadastrar`,
      user
    )
  }
}
