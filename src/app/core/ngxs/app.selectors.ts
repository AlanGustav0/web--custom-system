import { createSelector } from '@ngxs/store';
import { AppState } from './app.state';
import { AppStateModel } from './interfaces/app.interface.model';


export class AppSelectors {

  static appModelState(){
    return createSelector([AppState], (state: AppStateModel) => {
      return state;
    });
  }
  static selectLoading(){
    return createSelector([AppState], (state: AppStateModel) => {
      return state.loading;
    });
  }

  static selectUser(){
    return createSelector([AppState], (state: AppStateModel) => {
      return state.user;
    });
  }
}
