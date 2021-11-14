import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NftCardComponent } from './nft-card.component';

@NgModule({
  declarations: [NftCardComponent],
  imports: [CommonModule],
  exports: [NftCardComponent],
})
export class NftCardModule {}
