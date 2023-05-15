import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token/token.service';
@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanLoad {
  constructor(
    private readonly _tokenService: TokenService,
    private readonly _router: Router
  ) {}

  canLoad():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {

    if (this._tokenService.hasToken()) {
      this._router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
