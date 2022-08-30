import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionMovieComponent } from './option-movie.component';

describe('OptionMovieComponent', () => {
  let component: OptionMovieComponent;
  let fixture: ComponentFixture<OptionMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
