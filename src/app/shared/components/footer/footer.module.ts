import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HorizontalDividerModule } from '../horizontal-divider/horizontal-divider.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, HorizontalDividerModule],
  exports: [FooterComponent],
})
export class FooterModule {}
