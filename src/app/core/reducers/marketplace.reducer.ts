import { Action, createReducer, on } from '@ngrx/store';

import { loadDataInStore } from '../actions/marketplace.actions';

export const marketPlaceFeatureKey = 'marketplace';

export interface MarketplaceState {
  marketplaceLoading: boolean;
  marketplace: any[];
}

export const initialState: MarketplaceState = {
  marketplaceLoading: false,
  marketplace: [],
};

export const reducer = createReducer(
  initialState,
  on(loadDataInStore, (state: MarketplaceState, { data }) => ({
    ...state,
    marketplace: state.marketplace.find((el) => el.id === data.id)
      ? state.marketplace
      : [...state.marketplace, data],
  }))
);

export function marketPlaceReducer(
  state: MarketplaceState | undefined,
  action: Action
) {
  return reducer(state, action);
}
