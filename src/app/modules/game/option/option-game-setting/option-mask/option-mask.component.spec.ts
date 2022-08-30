import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionMaskComponent } from './option-mask.component';

describe('OptionMaskComponent', () => {
  let component: OptionMaskComponent;
  let fixture: ComponentFixture<OptionMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionMaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
