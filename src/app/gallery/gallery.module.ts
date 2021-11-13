import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NftCardModule } from '../shared/components/nft-card/nft-card.module';
import { CollectionsComponent } from './collections/collections.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';

@NgModule({
  declarations: [GalleryComponent, CollectionsComponent],
  imports: [CommonModule, GalleryRoutingModule, NftCardModule],
})
export class GalleryModule {}
