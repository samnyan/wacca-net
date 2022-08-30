import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionGateDirectingSkipComponent } from './option-gate-directing-skip.component';

describe('OptionGateDirectingSkipComponent', () => {
  let component: OptionGateDirectingSkipComponent;
  let fixture: ComponentFixture<OptionGateDirectingSkipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionGateDirectingSkipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionGateDirectingSkipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
