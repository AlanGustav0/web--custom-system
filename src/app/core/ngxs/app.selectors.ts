import { createSelector } from '@ngxs/store';
import { AppState } from './app.state';


export class AppSelectors {
  static selectLoginError(){
    return createSelector([AppState], (state: AppState) => {
      return state.loginError;
    });
  }
}
