import { Component, Input } from '@angular/core';

import { productDescription, purchaseDescription } from './constants';

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
})
export class NftCardComponent {
  @Input() imgSrc = 'assets/img/marketplaceimg2.png';
  @Input() coordinates = '12°00\'00.3"S 77°06\'18.9"W';
  @Input() name = 'NFT';

  productDescription = productDescription;
  purchaseDescription = purchaseDescription;
  price = 300;
  currency = 'EUR';
  divider = 'assets/img/pattern_low.png';
}
