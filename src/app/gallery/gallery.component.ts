import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';

import { contract } from './constant';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  contractAdress = '';

  ngOnInit(): void {
    const web3 = new Web3('ws://localhost:8546');
    console.log('..connecting');
    console.log(web3);
    console.log(contract);

    const nftContract = new web3.eth.Contract(
      contract.abi as any,
      this.contractAdress
    );
    console.log(nftContract);
    // this.call(nftContract);

    console.log((window as any).ethereum);
    if ((window as any).ethereum) {
    }
  }

  // async call(nftContract: any): Promise<any> {
  //   const uri = await nftContract.methods.tokenURI(1).call();
  //   console.log(uri);
  // }
}
