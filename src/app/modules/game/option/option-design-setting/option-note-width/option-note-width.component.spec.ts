import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionNoteWidthComponent } from './option-note-width.component';

describe('OptionNoteWidthComponent', () => {
  let component: OptionNoteWidthComponent;
  let fixture: ComponentFixture<OptionNoteWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionNoteWidthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionNoteWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
