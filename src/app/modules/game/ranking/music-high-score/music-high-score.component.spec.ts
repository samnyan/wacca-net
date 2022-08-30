import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicHighScoreComponent } from './music-high-score.component';

describe('MusicHighScoreComponent', () => {
  let component: MusicHighScoreComponent;
  let fixture: ComponentFixture<MusicHighScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicHighScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicHighScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
