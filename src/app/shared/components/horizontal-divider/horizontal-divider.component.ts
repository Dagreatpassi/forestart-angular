import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-divider',
  templateUrl: './horizontal-divider.component.html',
})
export class HorizontalDividerComponent {
  @Input() marginTop = true;
  divider = 'assets/img/pattern.png';
}
