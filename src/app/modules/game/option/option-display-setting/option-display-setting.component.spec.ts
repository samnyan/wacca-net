import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionDisplaySettingComponent } from './option-display-setting.component';

describe('OptionDisplaySettingComponent', () => {
  let component: OptionDisplaySettingComponent;
  let fixture: ComponentFixture<OptionDisplaySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionDisplaySettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionDisplaySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
