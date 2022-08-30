import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalHighScoreDetailComponent } from './total-high-score-detail.component';

describe('TotalHighScoreDetailComponent', () => {
  let component: TotalHighScoreDetailComponent;
  let fixture: ComponentFixture<TotalHighScoreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalHighScoreDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalHighScoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
