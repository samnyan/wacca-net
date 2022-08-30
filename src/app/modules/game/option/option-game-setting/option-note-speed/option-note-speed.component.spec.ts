import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionNoteSpeedComponent } from './option-note-speed.component';

describe('OptionNoteSpeedComponent', () => {
  let component: OptionNoteSpeedComponent;
  let fixture: ComponentFixture<OptionNoteSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionNoteSpeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionNoteSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
