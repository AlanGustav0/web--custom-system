import { Injectable } from '@angular/core';
import { TokenResponse } from '../interfaces/response/token-response.interface';

const KEY = 'authToken';

@Injectable({ providedIn: 'root'})
export class TokenService {

    hasToken() {
        return !!this.getToken();
    }

    setToken(token: TokenResponse) {
        window.localStorage.setItem(KEY, JSON.stringify(token));
    }

    getToken() {
        return window.localStorage.getItem(KEY) || '';
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }
}
