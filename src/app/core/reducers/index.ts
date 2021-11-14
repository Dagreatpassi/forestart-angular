import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { marketPlaceReducer } from './marketplace.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  marketplace: marketPlaceReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
