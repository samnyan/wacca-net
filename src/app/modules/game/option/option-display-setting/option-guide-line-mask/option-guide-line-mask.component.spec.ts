import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionGuideLineMaskComponent } from './option-guide-line-mask.component';

describe('OptionGuideLineMaskComponent', () => {
  let component: OptionGuideLineMaskComponent;
  let fixture: ComponentFixture<OptionGuideLineMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionGuideLineMaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionGuideLineMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
