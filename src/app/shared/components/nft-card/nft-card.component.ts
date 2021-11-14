import { Component, Input } from '@angular/core';

import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

import { Nft } from '../../models/nft.model';
import { productDescription, purchaseDescription } from './constants';
import { marketplace_contract_abi } from '../../../gallery/constant';

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
})
export class NftCardComponent {
  @Input() imgSrc = 'assets/img/marketplaceimg2.png';
  @Input() coordinates = '12°00\'00.3"S 77°06\'18.9"W';
  @Input() name = 'NFT';
  @Input() nft!: Nft;

  marketplace_address = '0x0964fE204ef36f07B78fa168A5eDb8f96bE3B8e3'; // Marketplace Contract
  marketContract: Contract;

  productDescription = productDescription;
  purchaseDescription = purchaseDescription;
  price = 1000;
  currency = 'EUR';
  divider = 'assets/img/pattern_low.png';
  eth_price = "0.25"; // static for now - can be dynamic later
                    // it is static in the marketplace contract as well

  async onBuyClick(): Promise<void> {

    let web3 = new Web3((window as any).ethereum);

    let sender;
    sender = (await web3.eth.requestAccounts())[0];

    this.marketContract = new web3.eth.Contract(
      marketplace_contract_abi as any,
      this.marketplace_address
    );

    // console.log('owner', await this.marketContract.methods.owner().call());

    const uint256id = web3.eth.abi.encodeParameter('uint256', this.nft.id);

    // send buy transaction
    this.marketContract.methods.buy(uint256id).send({
      from: sender,
      value: web3.utils.toWei(this.eth_price, 'ether')
    }).then(function (res: any) {
      console.log(res)
    })

    //console.log(this.nft);
  }
}

