import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionGameSettingComponent } from './option-game-setting.component';

describe('OptionGameSettingComponent', () => {
  let component: OptionGameSettingComponent;
  let fixture: ComponentFixture<OptionGameSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionGameSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionGameSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
