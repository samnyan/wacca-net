import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionJudgeDetailComponent } from './option-judge-detail.component';

describe('OptionJudgeDetailComponent', () => {
  let component: OptionJudgeDetailComponent;
  let fixture: ComponentFixture<OptionJudgeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionJudgeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionJudgeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
