import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionTouchEffectShootComponent } from './option-touch-effect-shoot.component';

describe('OptionTouchEffectShootComponent', () => {
  let component: OptionTouchEffectShootComponent;
  let fixture: ComponentFixture<OptionTouchEffectShootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionTouchEffectShootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionTouchEffectShootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
