import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicHighScoreDetailComponent } from './music-high-score-detail.component';

describe('MusicHighScoreDetailComponent', () => {
  let component: MusicHighScoreDetailComponent;
  let fixture: ComponentFixture<MusicHighScoreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicHighScoreDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicHighScoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
