import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AppStateModel } from './interfaces/app.interface.model';
import { Login, LoginError, LoginSuccess, Logout } from './app.actions';
import { TokenResponse } from '../services/interfaces/response/token-response.interface';


@State<AppStateModel>({
  name: 'app',
  defaults: {
    userLogged: false,
    loading: false,
    error: false,
  },
})
@Injectable()
export class AppState {
  @Action(Login)
  login(context: StateContext<AppStateModel>) {
    const state = context.getState();
          context.setState({
            ...state,
            userLogged: false,
            loading: true,
            error: false,
          });
  }

  @Action(LoginSuccess)
  loginSuccess(context: StateContext<AppStateModel>, response: TokenResponse) {
    const state = context.getState();
    context.setState({
      ...state,
      userLogged: true,
      loading: false,
      error: false,
      user: response.user,
    });
  }

  @Action(LoginError)
  loginError(context: StateContext<AppStateModel>) {
    const state = context.getState();
    context.setState({
      ...state,
      userLogged: false,
      loading: false,
      error: true,
    });
  }

  @Action(Logout)
  logout(context: StateContext<AppStateModel>) {
    const state = context.getState();
    context.setState({
      ...state,
      userLogged: false,
      loading: false,
      error: false,
    });
  }
}
