import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

export interface StoreRootState {
  router: fromRouter.RouterReducerState<any>;
}
export const reducers: ActionReducerMap<StoreRootState> = {
  router: routerReducer,
};
