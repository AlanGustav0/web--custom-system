import { Injectable, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { Actions, Store, ofActionDispatched } from '@ngxs/store';
import { Login, LoginSuccess, LoginError, Logout } from './app.actions';
import { Subject, switchMap, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppHandler implements OnDestroy {
  private _unsub$ = new Subject<void>();
  constructor(
    private readonly _authService: AuthService,
    private readonly _userService: UserService,
    private readonly _router: Router,
    private readonly _actions$: Actions,
    private readonly _store: Store
  ) {
    this._actions$
      .pipe(ofActionDispatched(Login)).pipe(takeUntil(this._unsub$))
      .pipe(
        switchMap((loginRequest: Login) => {
          return this._authService.auth(loginRequest.request);
        })
      )
      .subscribe({
        next: (response) => {
          this._userService.setToken(response);
          this._store.dispatch(new LoginSuccess(response));
          this._router.navigate(['/home']);
        },
        error: () => {
          this._store.dispatch(new LoginError());
        },
      });

    this._actions$.pipe(ofActionDispatched(Logout)).pipe(takeUntil(this._unsub$)
    ).subscribe({
      next:() => {
        this._userService.logout();
        this._router.navigate(['/boas-vindas']);
      },
    });
  }

  ngOnDestroy() {
    this._unsub$.next();
    this._unsub$.complete();
  }
}
