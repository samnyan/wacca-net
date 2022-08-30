import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionDesignSettingComponent } from './option-design-setting.component';

describe('OptionDesignSettingComponent', () => {
  let component: OptionDesignSettingComponent;
  let fixture: ComponentFixture<OptionDesignSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionDesignSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionDesignSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
