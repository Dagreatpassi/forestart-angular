import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestartHeaderComponent } from './forestart-header.component';

describe('ForestartHeaderComponent', () => {
  let component: ForestartHeaderComponent;
  let fixture: ComponentFixture<ForestartHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestartHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestartHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
