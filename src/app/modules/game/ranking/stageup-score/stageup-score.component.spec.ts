import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageupScoreComponent } from './stageup-score.component';

describe('StageupScoreComponent', () => {
  let component: StageupScoreComponent;
  let fixture: ComponentFixture<StageupScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageupScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageupScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
