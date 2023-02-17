import { Observable } from 'rxjs';
import { RegisterRequest } from './services/login/request/register-request.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

const URL = `${environment.baseUrl}`;
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private readonly _httpClient: HttpClient) {}

  public register(user: RegisterRequest): Observable<any> {
    return this._httpClient.post<any>(
      `${URL}/usuario/cadastrar`,
      user
    )
  }
}
