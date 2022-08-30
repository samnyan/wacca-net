import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageupScoreDetailComponent } from './stageup-score-detail.component';

describe('StageupScoreDetailComponent', () => {
  let component: StageupScoreDetailComponent;
  let fixture: ComponentFixture<StageupScoreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageupScoreDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageupScoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
