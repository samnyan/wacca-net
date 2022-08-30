import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSoundSettingComponent } from './option-sound-setting.component';

describe('OptionSoundSettingComponent', () => {
  let component: OptionSoundSettingComponent;
  let fixture: ComponentFixture<OptionSoundSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionSoundSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionSoundSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
