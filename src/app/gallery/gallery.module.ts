import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HorizontalDividerModule } from '../shared/components/horizontal-divider/horizontal-divider.module';
import { NftCardModule } from '../shared/components/nft-card/nft-card.module';
import { CollectionsComponent } from './collections/collections.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

@NgModule({
  declarations: [GalleryComponent, CollectionsComponent, MarketplaceComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    NftCardModule,
    HorizontalDividerModule,
  ],
})
export class GalleryModule {}
