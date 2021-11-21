import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

import { marketplace_contract_abi } from '../../../gallery/constant';
import { Nft } from '../../models/nft.model';
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

  marketplace_address = '0x0964fE204ef36f07B78fa168A5eDb8f96bE3B8e3'; // Marketplace Contract
  marketContract: Contract;

  productDescription = productDescription;
  purchaseDescription = purchaseDescription;
  price = 1000;
  currency = 'EUR';
  divider = 'assets/img/pattern_low.png';
  eth_price = '0.25'; // static for now - can be dynamic later
  web3: Web3;

  // it is static in the marketplace contract as well

  ngOnInit(): void {
    this.web3 = new Web3((window as any).ethereum);
  }

  async onBuyClick(): Promise<void> {
    let sender;
    sender = (await this.web3.eth.requestAccounts())[0];

    this.marketContract = new this.web3.eth.Contract(
      marketplace_contract_abi as any,
      this.marketplace_address
    );

    // console.log('owner', await this.marketContract.methods.owner().call());

    const uint256id = this.web3.eth.abi.encodeParameter('uint256', this.nft.id);
    const that = this;
    // send buy transaction
    this.marketContract.methods
      .buy(uint256id)
      .send({
        from: sender,
        value: this.web3.utils.toWei(this.eth_price, 'ether'),
      })
      .then(function (res: any) {
        console.log(res.transactionHash);
        that.nftBought.emit({ hash: res.transactionHash, id: that.nft.id });
      });
  }
  async onGiveBack(): Promise<void> {
    console.log('give back');
  }
}
