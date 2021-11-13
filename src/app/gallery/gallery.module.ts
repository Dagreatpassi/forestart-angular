import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HorizontalDividerComponent } from '../shared/components/horizontal-divider/horizontal-divider.component';
import { NftCardModule } from '../shared/components/nft-card/nft-card.module';
import { CollectionsComponent } from './collections/collections.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

@NgModule({
  declarations: [
    GalleryComponent,
    CollectionsComponent,
    HorizontalDividerComponent,
    MarketplaceComponent,
  ],
  imports: [CommonModule, GalleryRoutingModule, NftCardModule],
})
export class GalleryModule {}
