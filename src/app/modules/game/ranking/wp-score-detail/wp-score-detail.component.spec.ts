import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpScoreDetailComponent } from './wp-score-detail.component';

describe('WpScoreDetailComponent', () => {
  let component: WpScoreDetailComponent;
  let fixture: ComponentFixture<WpScoreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpScoreDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpScoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
