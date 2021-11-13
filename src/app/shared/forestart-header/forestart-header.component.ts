import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes } from '../../app-routes.enum';

@Component({
  selector: 'app-forestart-header',
  templateUrl: './forestart-header.component.html',
  styles: [],
})
export class ForestartHeaderComponent {
  AppRoutes = AppRoutes;
  logoPath = 'assets/img/logo.svg';
  constructor(private readonly router: Router) {}

  navigate(route: AppRoutes): void {
    this.router.navigate([route]);
  }
}
