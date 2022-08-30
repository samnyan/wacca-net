import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSnapNoteUpColorComponent } from './option-snap-note-up-color.component';

describe('OptionSnapNoteUpColorComponent', () => {
  let component: OptionSnapNoteUpColorComponent;
  let fixture: ComponentFixture<OptionSnapNoteUpColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionSnapNoteUpColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionSnapNoteUpColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
