import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionMultiRankDisplayComponent } from './option-multi-rank-display.component';

describe('OptionMultiRankDisplayComponent', () => {
  let component: OptionMultiRankDisplayComponent;
  let fixture: ComponentFixture<OptionMultiRankDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionMultiRankDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionMultiRankDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
