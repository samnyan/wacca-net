import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionNoteTouchSeComponent } from './option-note-touch-se.component';

describe('OptionNoteTouchSeComponent', () => {
  let component: OptionNoteTouchSeComponent;
  let fixture: ComponentFixture<OptionNoteTouchSeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionNoteTouchSeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionNoteTouchSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
