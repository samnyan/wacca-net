import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionJudgeLineTimingComponent } from './option-judge-line-timing.component';

describe('OptionJudgeLineTimingComponent', () => {
  let component: OptionJudgeLineTimingComponent;
  let fixture: ComponentFixture<OptionJudgeLineTimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionJudgeLineTimingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionJudgeLineTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
