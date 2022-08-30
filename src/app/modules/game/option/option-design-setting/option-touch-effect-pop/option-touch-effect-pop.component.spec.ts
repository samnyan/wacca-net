import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionTouchEffectPopComponent } from './option-touch-effect-pop.component';

describe('OptionTouchEffectPopComponent', () => {
  let component: OptionTouchEffectPopComponent;
  let fixture: ComponentFixture<OptionTouchEffectPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionTouchEffectPopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionTouchEffectPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
