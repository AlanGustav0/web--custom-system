import { TokenResponse } from './../interfaces/response/token-response.interface';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { UserResponse } from '../interfaces/response/user-response.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private readonly _tokenService: TokenService) {}

  setToken(token: TokenResponse) {
    this._tokenService.setToken(token);
  }

  logout() {
    this._tokenService.removeToken();
  }

  isLogged() {
    return this._tokenService.hasToken();
  }

  getUser():UserResponse {
    const token:any = this._tokenService.getToken();
    return token.user as UserResponse;
  }
}
