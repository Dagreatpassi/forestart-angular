import { Component, Input, OnInit } from '@angular/core';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

import { marketPlaceNfts } from '../../../assets/nfts/nft-constants';
import { Nft } from '../../shared/models/nft.model';
import { forestart_contract_abi } from '../constant';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./test.scss'],
})
export class MarketplaceComponent implements OnInit {
  marketplace_address = '0x0964fE204ef36f07B78fa168A5eDb8f96bE3B8e3'; // Marketplace Contract
  forestart_address = '0x9B117bC41f66FE6968a6A5A78FA9633b7904651C';
  buyEnabled = true;
  nftsLoading = true;
  public forestartContract!: Contract;

  imgSrc = 'assets/img/mint.png';
  marketPlaceNfts: Nft[] = [];
  buySuccess = false;
  etherScanUrl = 'https://ropsten.etherscan.io/tx/';

  @Input() metaMaskErrorMessage = '';
  @Input() metaMaskExists = true;

  ngOnInit(): void {
    if ((window as any).ethereum) {
      let web3 = new Web3((window as any).ethereum);

      this.forestartContract = new web3.eth.Contract(
        forestart_contract_abi as any,
        this.forestart_address
      );
      setTimeout(() => {
        this.getMarketPlaceNfts();
      }, 1000);
    }
  }

  async getMarketPlaceNfts(): Promise<void> {
    let items = [];
    for (let i = 1; i <= 5; i++) {
      console.log('in if');
      let ownerOfI = await this.forestartContract.methods.ownerOf(i).call();

      if (ownerOfI === this.marketplace_address) {
        const item = marketPlaceNfts.find((item) => item.id === i);
        if (item) {
          items.push(item);
        }
      }
    }
    this.marketPlaceNfts = items;
    this.nftsLoading = false;
  }

  showSampleData(): void {
    this.marketPlaceNfts = marketPlaceNfts;
    this.nftsLoading = false;
    this.buyEnabled = false;
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
