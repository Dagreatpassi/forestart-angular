import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { MarketplaceService } from 'src/app/shared/services/marketplace.service';

import { getMarketplace, getMarketplaceSuccess } from '../actions/marketplace.actions';

@Injectable()
export class MarketplaceEffects {
  getMarketplace$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMarketplace.type),
      mergeMap(() =>
        this.service
          .getAll()
          .pipe(map(() => getMarketplaceSuccess({ marketplace: [] })))
      )
    )
  );

  constructor(private actions$: Actions, private service: MarketplaceService) {}
}
