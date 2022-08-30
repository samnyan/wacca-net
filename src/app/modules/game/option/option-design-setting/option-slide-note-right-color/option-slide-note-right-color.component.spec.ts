import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSlideNoteRightColorComponent } from './option-slide-note-right-color.component';

describe('OptionSlideNoteRightColorComponent', () => {
  let component: OptionSlideNoteRightColorComponent;
  let fixture: ComponentFixture<OptionSlideNoteRightColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionSlideNoteRightColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionSlideNoteRightColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
