import { Injectable } from '@angular/core';
import { TokenResponse } from '../interfaces/response/token-response.interface';

const KEY = 'authToken';

@Injectable({ providedIn: 'root'})
export class TokenService {

    hasToken() {
        return !!this.getToken();
    }

    setToken(token: TokenResponse) {
        window.sessionStorage.setItem(KEY, JSON.stringify(token));
    }

    getToken() {
        return window.sessionStorage.getItem(KEY) || '';
    }

    removeToken() {
        window.sessionStorage.removeItem(KEY);
    }
}
