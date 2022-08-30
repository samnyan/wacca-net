import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionGuideMeasureLineComponent } from './option-guide-measure-line.component';

describe('OptionGuideMeasureLineComponent', () => {
  let component: OptionGuideMeasureLineComponent;
  let fixture: ComponentFixture<OptionGuideMeasureLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionGuideMeasureLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionGuideMeasureLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
