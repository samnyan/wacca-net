import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSnapNoteDownColorComponent } from './option-snap-note-down-color.component';

describe('OptionSnapNoteDownColorComponent', () => {
  let component: OptionSnapNoteDownColorComponent;
  let fixture: ComponentFixture<OptionSnapNoteDownColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionSnapNoteDownColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionSnapNoteDownColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
