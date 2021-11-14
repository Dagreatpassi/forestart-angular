import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

import { contract } from './constant';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  contractAdress = '0x9B117bC41f66FE6968a6A5A78FA9633b7904651C';
  metaMaskExists = true;
  public nftContract: Contract;

  ngOnInit(): void {
    if ((window as any).ethereum) {
      let web3 = new Web3((window as any).ethereum);
      this.nftContract = new web3.eth.Contract(
        contract.abi as any,
        this.contractAdress
      );
      this.call(this.nftContract);
    } else {
      // display to user please enable meta mask
      this.metaMaskExists = false;
    }
  }

  async call(nftContract: any): Promise<any> {
    // 1-5
    const uri = await nftContract.methods.tokenURI(5).call();
    console.log(uri);
  }
}
