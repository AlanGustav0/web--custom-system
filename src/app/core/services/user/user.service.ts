import { TokenResponse } from './../interfaces/response/token-response.interface';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { UserResponse } from '../interfaces/response/user-response.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { UserProfileResponse } from '../interfaces/response/user-profile-response.interface';
import { UserProfileRequest } from '../interfaces/request/user-profile-request.interface';
import { ProfileData } from '../interfaces/request/profile-data-request.interface';

const URL = `${environment.baseUrl}`;

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private readonly _tokenService: TokenService,
    private readonly _httpClient: HttpClient
  ) {}

  setToken(token: TokenResponse) {
    this._tokenService.setToken(token);
  }

  logout() {
    this._tokenService.removeToken();
  }

  isLogged() {
    return this._tokenService.hasToken();
  }

  getUser(id:number): Observable<UserResponse>{
    const params = new HttpParams().set('id', id);
    return this._httpClient.get<any>(`${URL}api/v1/usuario`, { params });
  }

  getUserProfile(id: number): Observable<UserProfileResponse> {
    const params = new HttpParams().set('id', id);
    return this._httpClient.get<any>(`${URL}api/v1/usuario/perfil`, { params });
  }

  updateUserProfile(
    request: UserProfileRequest
  ): Observable<UserProfileResponse> {
    return this._httpClient.put<any>(
      `${URL}api/v1/usuario/atualizar/perfil`,
      request
    );
  }

  updateImageProfile(request: ProfileData): Observable<any> {
    const formData = new FormData();
    formData.append('File', request.file);
    formData.append('Id', request.id.toString());
    return this._httpClient.post(`${URL}api/v1/usuario/cadastrar/imagem`, formData);
  }
}
