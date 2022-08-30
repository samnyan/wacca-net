import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionPlayerLevelDisplayComponent } from './option-player-level-display.component';

describe('OptionPlayerLevelDisplayComponent', () => {
  let component: OptionPlayerLevelDisplayComponent;
  let fixture: ComponentFixture<OptionPlayerLevelDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionPlayerLevelDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionPlayerLevelDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
