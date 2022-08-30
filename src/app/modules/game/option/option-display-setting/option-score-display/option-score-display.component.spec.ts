import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionScoreDisplayComponent } from './option-score-display.component';

describe('OptionScoreDisplayComponent', () => {
  let component: OptionScoreDisplayComponent;
  let fixture: ComponentFixture<OptionScoreDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionScoreDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionScoreDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
