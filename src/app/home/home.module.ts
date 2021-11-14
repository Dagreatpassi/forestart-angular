import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HorizontalDividerModule } from '../shared/components/horizontal-divider/horizontal-divider.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HorizontalDividerModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
