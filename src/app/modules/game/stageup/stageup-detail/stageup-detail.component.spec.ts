import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageupDetailComponent } from './stageup-detail.component';

describe('StageupDetailComponent', () => {
  let component: StageupDetailComponent;
  let fixture: ComponentFixture<StageupDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageupDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
