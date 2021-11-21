import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Nft } from '../../models/nft.model';
import { MarketplaceService } from '../../services/marketplace.service';
import { productDescription, purchaseDescription } from './constants';

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
})
export class NftCardComponent implements OnInit {
  @Input() imgSrc = 'assets/img/marketplaceimg2.png';
  @Input() coordinates = '12°00\'00.3"S 77°06\'18.9"W';
  @Input() name = 'NFT';
  @Input() buyEnabled = true;
  @Input() nft!: Nft;
  @Input() isGallery = false;

  @Output() nftBought = new EventEmitter();
  @Output() nftGivenBack = new EventEmitter();

  productDescription = productDescription;
  purchaseDescription = purchaseDescription;
  price = 1000;
  currency = 'EUR';
  divider = 'assets/img/pattern_low.png';
  eth_price = '0.25'; // static for now - can be dynamic later

  sender: string;
  uint256id: string;

  constructor(private marketPlaceService: MarketplaceService) {}

  ngOnInit(): void {
    this.setup();
  }
  async setup(): Promise<void> {
    this.sender = (await this.marketPlaceService.web3.eth.requestAccounts())[0];
    this.uint256id = this.marketPlaceService.web3.eth.abi.encodeParameter(
      'uint256',
      this.nft.id
    );
  }

  async onBuyClick(): Promise<void> {
    const that = this;
    // send buy transaction
    this.marketPlaceService.marketContract.methods
      .buy(this.uint256id)
      .send({
        from: this.sender,
        value: this.marketPlaceService.web3.utils.toWei(
          this.eth_price,
          'ether'
        ),
      })
      .then(function (res: any) {
        console.log(res.transactionHash);
        that.nftBought.emit({ hash: res.transactionHash, id: that.nft.id });
      });
  }

  async onGiveBack(): Promise<void> {
    const that = this;
    // send give back transaction
    this.marketPlaceService.nftContract.methods
      .approve(this.marketPlaceService.marketplaceAddress, this.nft.id)
      .send({
        from: this.sender,
      })
      .then((res: any) => {
        console.log(`Approve done ${res.transactionHash}`);
        this.marketPlaceService.nftContract.methods
          .safeTransferFrom(
            this.sender,
            this.marketPlaceService.marketplaceAddress,
            this.nft.id
          )
          .send({
            from: this.sender,
          })
          .then((res: any) => {
            that.nftGivenBack.emit({
              hash: res.transactionHash,
              id: that.nft.id,
            });
          });
      });
  }
}
