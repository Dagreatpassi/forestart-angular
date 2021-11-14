import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes } from '../app-routes.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  constructor(private readonly router: Router) {}
  amazonImg = 'assets/img/amazon_high_resolution.jpg';
  amazonBurningImg = 'assets/img/fire_big.jpeg';
  skull1 = 'assets/img/skull1.png';
  skull2 = 'assets/img/skull2.png';
  divider = 'assets/img/pattern.png';
  ethereumBg = 'assets/img/ethwtext.png';
  amazoncircle1 = 'assets/img/amazoncircle1.png';
  amazoncircle2 = 'assets/img/amazoncircle2.png';
  cryptocircle = 'assets/img/cryptocircle.png';
  lbbw = 'assets/img/lbbw_logo.png';
  logo = 'assets/img/logo.png';
  marketPlaceImgs = [
    'assets/img/marketplaceimg1.png',
    'assets/img/marketplaceimg2.png',
  ];
  missionSrc = 'assets/img/tokenize.png';
  posImg = 'assets/img/proofofsus.png';
  projectFacts = 'assets/img/project_facts.png';

  onMoreClick(): void {
    this.router.navigate([AppRoutes.GALLERY]);
  }
}
