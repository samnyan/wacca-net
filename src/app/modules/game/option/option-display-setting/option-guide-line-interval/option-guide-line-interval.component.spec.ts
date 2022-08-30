import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionGuideLineIntervalComponent } from './option-guide-line-interval.component';

describe('OptionGuideLineIntervalComponent', () => {
  let component: OptionGuideLineIntervalComponent;
  let fixture: ComponentFixture<OptionGuideLineIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionGuideLineIntervalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionGuideLineIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
