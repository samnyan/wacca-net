import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionRateDisplayComponent } from './option-rate-display.component';

describe('OptionRateDisplayComponent', () => {
  let component: OptionRateDisplayComponent;
  let fixture: ComponentFixture<OptionRateDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionRateDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionRateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
