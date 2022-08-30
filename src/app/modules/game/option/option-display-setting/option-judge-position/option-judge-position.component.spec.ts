import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionJudgePositionComponent } from './option-judge-position.component';

describe('OptionJudgePositionComponent', () => {
  let component: OptionJudgePositionComponent;
  let fixture: ComponentFixture<OptionJudgePositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionJudgePositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionJudgePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
