import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionTouchNoteColorComponent } from './option-touch-note-color.component';

describe('OptionTouchNoteColorComponent', () => {
  let component: OptionTouchNoteColorComponent;
  let fixture: ComponentFixture<OptionTouchNoteColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionTouchNoteColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionTouchNoteColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
