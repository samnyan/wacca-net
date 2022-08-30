import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageupComponent } from './stageup.component';

describe('StageupComponent', () => {
  let component: StageupComponent;
  let fixture: ComponentFixture<StageupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
