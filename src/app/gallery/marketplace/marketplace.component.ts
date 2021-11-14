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
  buySuccess = false;
  etherScanUrl = 'https://ropsten.etherscan.io/tx/';

  @Input() metaMaskErrorMessage = '';
  @Input() metaMaskExists = true;

  getCoordinate(nft: Nft): string {
    return (
      nft.attributes.find((el) => el.trait_type === TraitType.Coordinates)
        ?.value || 'undefined'
    );
  }
  onNFTBought(data: { hash: string; id: number }): void {
    this.etherScanUrl += data.hash;
    this.buySuccess = true;

    this.removeIdFromMarketplace(data.id);
    setTimeout(() => {
      this.buySuccess = false;
    }, 10000);
  }
  removeIdFromMarketplace(id: number): void {
    const index = this.marketPlaceNfts.findIndex((el) => el.id === id);
    if (index > -1) {
      this.marketPlaceNfts.splice(index, 1);
    }
  }
}
