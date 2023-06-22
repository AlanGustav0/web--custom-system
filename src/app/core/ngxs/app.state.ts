import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AppStateModel } from './interfaces/app.interface.model';
import { Login, LoginError, LoginSuccess, Logout } from './app.actions';

@State<AppStateModel>({
  name: 'appModel',
  defaults: {
    userLogged: false,
    loading: false,
    error: false,
    user: undefined,
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
  loginSuccess(context: StateContext<AppStateModel>, action: LoginSuccess) {
    const state = context.getState();
    context.setState({
      ...state,
      userLogged: true,
      loading: false,
      error: false,
      user: action.response.user,
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
      user:undefined
    });
  }
}
