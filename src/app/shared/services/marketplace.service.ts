import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { forestart_contract_abi, marketplace_contract_abi } from 'src/app/gallery/constant';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

@Injectable({
  providedIn: 'root',
})
export class MarketplaceService {
  forestartAddress = '0x9B117bC41f66FE6968a6A5A78FA9633b7904651C'; // FORESTART Contract (NFT)
  marketplaceAddress = '0x0964fE204ef36f07B78fa168A5eDb8f96bE3B8e3'; // Marketplace Contract

  public metaMaskConditionsMet = true;
  public metaMaskError = '';
  public web3: Web3;

  nftContract: Contract;
  marketContract: Contract;

  constructor() {
    if ((window as any).ethereum) {
      this.web3 = new Web3((window as any).ethereum);
      this.initConfig();
    } else {
      this.metaMaskConditionsMet = false;
      this.metaMaskError =
        "Note: You don't have Metamask installed. Please install MetaMask to purchase NFTs";
    }
  }

  initConfig(): void {
    // init nftContract
    this.nftContract = new this.web3.eth.Contract(
      forestart_contract_abi as any,
      this.forestartAddress
    );

    // init MarketplaceContract
    this.marketContract = new this.web3.eth.Contract(
      marketplace_contract_abi as any,
      this.marketplaceAddress
    );
  }

  getAll(): Observable<any> {
    console.log('getAll');
    return of();
  }
}
