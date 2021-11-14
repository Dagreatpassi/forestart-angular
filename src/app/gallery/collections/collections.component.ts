import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
})
export class CollectionsComponent {
  imgSrc = 'assets/img/mint.png';
  myNfts = [];
  @Input() metaMaskExists = true;
  @Input() metaMaskErrorMessage = '';

  navigateToBuy(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
