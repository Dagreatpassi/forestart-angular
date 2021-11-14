import { createAction, props } from '@ngrx/store';

export const getMarketplace = createAction('[Marketplace] Get Marketplace');
export const getMarketplaceSuccess = createAction(
  '[Marketplace] Get Marketplace Success',
  props<{ marketplace: any }>()
);
export const getMarketplaceFailure = createAction(
  '[Marketplace] Get Marketplace Failure',
  props<{ error: any }>()
);
