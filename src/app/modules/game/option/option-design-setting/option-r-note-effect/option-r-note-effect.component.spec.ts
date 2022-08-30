import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionRNoteEffectComponent } from './option-r-note-effect.component';

describe('OptionRNoteEffectComponent', () => {
  let component: OptionRNoteEffectComponent;
  let fixture: ComponentFixture<OptionRNoteEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionRNoteEffectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionRNoteEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
