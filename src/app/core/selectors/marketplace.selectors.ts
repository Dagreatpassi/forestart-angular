import { MarketplaceState } from '../reducers/marketplace.reducer';

export interface AppState {
  marketplace: MarketplaceState;
}

export const getMarketplace = (state: AppState) => state.marketplace;
