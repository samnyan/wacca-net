import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionMissionDirectingSkipComponent } from './option-mission-directing-skip.component';

describe('OptionMissionDirectingSkipComponent', () => {
  let component: OptionMissionDirectingSkipComponent;
  let fixture: ComponentFixture<OptionMissionDirectingSkipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionMissionDirectingSkipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionMissionDirectingSkipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
