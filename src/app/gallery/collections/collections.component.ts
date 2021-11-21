import { Component, Input, OnInit } from '@angular/core';
import { Nft } from 'src/app/shared/models/nft.model';
import { TraitType } from 'src/app/shared/models/trait-type.enum';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

import { marketPlaceNfts } from '../../../assets/nfts/nft-constants';
import { forestart_contract_abi } from '../constant';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
})
export class CollectionsComponent implements OnInit {
  imgSrc = 'assets/img/mint.png';
  forestart_address = '0x9B117bC41f66FE6968a6A5A78FA9633b7904651C';
  forestartContract: Contract;

  @Input() myNfts: Nft[] = [];
  @Input() metaMaskExists = true;
  @Input() metaMaskErrorMessage = '';

  ngOnInit(): void {
    if ((window as any).ethereum) {
      let web3 = new Web3((window as any).ethereum);

      this.forestartContract = new web3.eth.Contract(
        forestart_contract_abi as any,
        this.forestart_address
      );
      this.getMyNfts(web3);
    }
  }

  async getMyNfts(web3: Web3): Promise<void> {
    const myAccount = (await web3.eth.requestAccounts())[0];

    for (let i = 1; i <= 5; i++) {
      let ownerOfI = await this.forestartContract.methods.ownerOf(i).call();
      if (ownerOfI === myAccount) {
        const item = marketPlaceNfts.find((item) => item.id === i);
        if (item) {
          this.myNfts.push(item);
        }
      }
    }
  }
  navigateToBuy(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getCoordinate(nft: Nft): string {
    return (
      nft.attributes.find((el) => el.trait_type === TraitType.Coordinates)
        ?.value || 'undefined'
    );
  }

  addNft(id: number): void {
    const foundNft = marketPlaceNfts.find((el) => el.id === id);
    if (foundNft) {
      this.myNfts.push(foundNft);
    }
  }
  onNftGivenBack(data: { hash: string; id: number }): void {
    this.removeIdFromCollection(data.id);
  }
  removeIdFromCollection(id: number): void {
    const index = this.myNfts.findIndex((el) => el.id === id);
    if (index > -1) {
      this.myNfts.splice(index, 1);
    }
  }
}
