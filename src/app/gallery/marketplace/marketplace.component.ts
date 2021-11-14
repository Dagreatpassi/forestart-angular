import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TraitType } from 'src/app/shared/models/trait-type.enum';

import { marketPlaceNfts } from '../../../assets/nfts/nft-constants';
import { Nft } from '../../shared/models/nft.model';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketplaceComponent {
  imgSrc = 'assets/img/mint.png';
  marketPlaceNfts: Nft[] = marketPlaceNfts;
  @Input() metaMaskErrorMessage = '';
  @Input() metaMaskExists = true;

  getCoordinate(nft: Nft): string {
    return (
      nft.attributes.find((el) => el.trait_type === TraitType.Coordinates)
        ?.value || 'undefined'
    );
  }
}
