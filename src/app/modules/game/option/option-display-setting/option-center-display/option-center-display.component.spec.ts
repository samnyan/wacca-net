import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionCenterDisplayComponent } from './option-center-display.component';

describe('OptionCenterDisplayComponent', () => {
  let component: OptionCenterDisplayComponent;
  let fixture: ComponentFixture<OptionCenterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionCenterDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionCenterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
