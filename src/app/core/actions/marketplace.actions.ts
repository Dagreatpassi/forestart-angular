import { createAction, props } from '@ngrx/store';
import { Nft } from 'src/app/shared/models/nft.model';

export const getMarketplace = createAction('[Marketplace] Get Marketplace');
export const getMarketplaceSuccess = createAction(
  '[Marketplace] Get Marketplace Success',
  props<{ marketplace: any }>()
);
export const getMarketplaceFailure = createAction(
  '[Marketplace] Get Marketplace Failure',
  props<{ error: any }>()
);

export const loadDataInStore = createAction(
  '[Marketplace] Get Marketplace',
  props<{ data: Nft }>()
);
