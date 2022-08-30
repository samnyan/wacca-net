import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSlideNoteLeftColorComponent } from './option-slide-note-left-color.component';

describe('OptionSlideNoteLeftColorComponent', () => {
  let component: OptionSlideNoteLeftColorComponent;
  let fixture: ComponentFixture<OptionSlideNoteLeftColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionSlideNoteLeftColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionSlideNoteLeftColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
