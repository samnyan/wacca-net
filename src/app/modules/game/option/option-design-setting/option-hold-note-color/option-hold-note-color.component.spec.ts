import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionHoldNoteColorComponent } from './option-hold-note-color.component';

describe('OptionHoldNoteColorComponent', () => {
  let component: OptionHoldNoteColorComponent;
  let fixture: ComponentFixture<OptionHoldNoteColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionHoldNoteColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionHoldNoteColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
