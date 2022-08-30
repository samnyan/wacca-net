import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionInformationMaskComponent } from './option-information-mask.component';

describe('OptionInformationMaskComponent', () => {
  let component: OptionInformationMaskComponent;
  let fixture: ComponentFixture<OptionInformationMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionInformationMaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionInformationMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
