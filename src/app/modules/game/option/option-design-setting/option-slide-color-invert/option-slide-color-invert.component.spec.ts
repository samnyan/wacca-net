import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSlideColorInvertComponent } from './option-slide-color-invert.component';

describe('OptionSlideColorInvertComponent', () => {
  let component: OptionSlideColorInvertComponent;
  let fixture: ComponentFixture<OptionSlideColorInvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionSlideColorInvertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionSlideColorInvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
