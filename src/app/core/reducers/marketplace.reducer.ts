import { Action, createReducer } from '@ngrx/store';

export const marketPlaceFeatureKey = 'marketplace';

export interface MarketplaceState {
  marketplaceLoading: boolean;
  marketplace: any[];
}

export const initialState: MarketplaceState = {
  marketplaceLoading: false,
  marketplace: [],
};

export const reducer = createReducer(initialState);

export function marketPlaceReducer(
  state: MarketplaceState | undefined,
  action: Action
) {
  return reducer(state, action);
}
