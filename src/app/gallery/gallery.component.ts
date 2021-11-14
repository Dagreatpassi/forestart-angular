import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

import { loadDataInStore } from '../core/actions/marketplace.actions';
import { Nft } from '../shared/models/nft.model';
import { contract } from './constant';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  contractAdress = '0x9B117bC41f66FE6968a6A5A78FA9633b7904651C';
  metaMaskExists = true;
  imageToShow: any;
  public nftContract: Contract;
  constructor(private http: HttpClient, private store: Store) {}

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
    let nfts: string[] = [];
    for (let i = 1; i <= 5; i++) {
      console.log(`getting nfts $${i}`);
      const uri = await nftContract.methods.tokenURI(i).call();
      nfts.push(uri);
    }

    console.log(`${nfts.length} found ...`);
    // this.http.get(nfts[0]).subscribe((res) => {
    //   console.log((res as Nft).image);

    //   this.getImage((res as Nft).image).subscribe((res) =>
    //     this.createImageFromBlob(res)
    //   );
    // });

    for (let i = 0; i < nfts.length; i++) {
      this.http.get(nfts[i]).subscribe((nftData) => {
        console.log((nftData as Nft).image);

        this.store.dispatch(
          loadDataInStore({ data: { ...(nftData as Nft), id: i } })
        );

        // this.getImage((nftData as Nft).image).subscribe((res) => {
        //   console.log(res);
        //   console.log(nftData);
        //   (nftData as Nft).blobImage = res;
        //   console.log(nftData);
        //   this.store.dispatch(loadDataInStore({ data: nftData }));
        // });
      });
    }
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.imageToShow = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
