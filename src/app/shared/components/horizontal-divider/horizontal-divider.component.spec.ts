import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalDividerComponent } from './horizontal-divider.component';

describe('HorizontalDividerComponent', () => {
  let component: HorizontalDividerComponent;
  let fixture: ComponentFixture<HorizontalDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
